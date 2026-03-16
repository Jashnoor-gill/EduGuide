# EduGuide

EduGuide is an AI-powered assistant for program discovery and query resolution. It combines a modern, user-friendly frontend (from the program-navigator-ai project) with a robust Retrieval-Augmented Generation (RAG) backend (adapted from Team-Paradox-Frosthack, fully rebranded and generalized).

## Features
- Natural language Q&A about educational programs
- Answers grounded in official program data (web, PDF, etc.)
- Modern, responsive UI
- No references to Team Paradox, Frosthack, or proprietary branding

## Setup Instructions

### 1. Backend (Python)
- Place your program brochure PDF in the EduGuide folder (if needed)
- Create a `.env` file with your API keys (see `.env.example`)
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Start the backend server (FastAPI/Flask, see backend/README.md for details)

### 2. Frontend (React)
- Install dependencies:
  ```bash
  npm install
  ```
- Start the frontend:
  ```bash
  npm run dev
  ```

### 3. Usage
- Open the frontend in your browser (usually http://localhost:5173)
- Ask questions about the program, admissions, fees, etc.

---

For any manual steps (API keys, PDF, etc.), see the backend/README.md and .env.example.
