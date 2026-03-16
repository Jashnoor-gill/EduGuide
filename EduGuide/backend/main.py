import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain_core.documents import Document
import requests

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_DIR = "./chroma_db"
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

class QueryRequest(BaseModel):
    question: str


# Build or load the vectorstore at startup
def get_vectorstore():
    if os.path.exists(DB_DIR) and os.listdir(DB_DIR):
        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
        return Chroma(persist_directory=DB_DIR, embedding_function=embeddings)
    docs = []
    if os.path.exists("brochure.pdf"):
        docs += PyMuPDFLoader("brochure.pdf").load()
    # You can add more sources here (web scraping, FAQ, etc.)
    if not docs:
        raise RuntimeError("No documents found for ingestion. Please add brochure.pdf or other sources.")
    splitter = RecursiveCharacterTextSplitter(chunk_size=600, chunk_overlap=80)
    chunks = splitter.split_documents(docs)
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vectordb = Chroma.from_documents(chunks, embeddings, persist_directory=DB_DIR)
    return vectordb

vectorstore = None

@app.on_event("startup")
def startup_event():
    global vectorstore
    try:
        vectorstore = get_vectorstore()
    except Exception as e:
        print(f"[Startup Error] {e}")
        vectorstore = None


@app.post("/query")
async def query(request: QueryRequest):
    global vectorstore
    if vectorstore is None:
        return {"answer": "The backend is not ready. Please check document ingestion and restart the server."}
    question = request.question.strip()
    if not question:
        return {"answer": "Please provide a valid question."}
    # Retrieve relevant docs
    docs_and_scores = vectorstore.similarity_search_with_score(question, k=6)
    context = "\n\n".join([doc.page_content for doc, _ in docs_and_scores])
    # Compose prompt
    prompt = f"""
You are EduGuide, an AI assistant for program discovery. Answer the user's question using ONLY the information below. If the answer is not present, say you don't know and do not make up information.

Context:
{context}

Question: {question}
Answer as clearly and concisely as possible:
"""
    # Call Groq LLM
    try:
        llm = ChatGroq(api_key=GROQ_API_KEY, model_name="llama3-70b-8192")
        response = llm.invoke(prompt)
        return {"answer": response.content.strip()}
    except Exception as e:
        return {"answer": f"Error generating answer: {e}"}
