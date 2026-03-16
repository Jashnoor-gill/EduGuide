# EduGuide

EduGuide is an AI-powered assistant for program discovery and query resolution. It features a modern React frontend and a robust Python backend using Retrieval-Augmented Generation (RAG).

## Features
- Natural language Q&A about educational programs
- Answers grounded in official program data (web, PDF, etc.)
- Modern, responsive UI

## Setup Instructions

### Backend (Python)
1. Download the program brochure PDF:
   [PGP Applied AI and Agentic Systems Brochure](https://files.mastersunion.link/MasterUnion/PGP_Applied_AI_and_Agentic_Systems_Brochure.pdf)
   Place it in `EduGuide/backend/brochure.pdf`.
2. Create a `.env` file in `EduGuide/backend` with your Groq API key:
   ```
   GROQ_API_KEY=your_actual_groq_api_key_here
   ```
   (Never commit this file to git!)
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend (React)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the frontend:
   ```bash
   npm run dev
   ```
3. Open your browser at [http://localhost:5177](http://localhost:5177)

## Notes
- Sensitive files (.env) and large files (brochure.pdf) are not tracked in the repo.
- See backend/README.md and .env.example for more details.
