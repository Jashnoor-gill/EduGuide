# EduGuide Backend

This backend powers the EduGuide AI assistant for program discovery and query resolution.

## Features
- FastAPI server with CORS enabled
- RAG (Retrieval-Augmented Generation) pipeline using ChromaDB and HuggingFace embeddings
- PDF ingestion (place your program brochure as `brochure.pdf` in this folder)
- LLM-powered answers via Groq API

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
2. **Add your API key:**
   - Copy `.env.example` to `.env` and add your Groq API key.
3. **Add your program brochure:**
   - Download and place `brochure.pdf` in this folder.
4. **Run the backend:**
   ```bash
   uvicorn main:app --reload
   ```

## API
- **POST /query**
  - Request: `{ "question": "Your question here" }`
  - Response: `{ "answer": "AI-generated answer" }`

## Notes
- The backend will automatically build a vector store from the PDF on first run.
- You can extend the document ingestion logic to add more sources (web, FAQ, etc.).
