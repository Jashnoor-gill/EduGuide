# EduGuide Frontend

This is the frontend for EduGuide, an AI-powered assistant for program discovery and query resolution.

## Features
- Modern, responsive React UI
- Clean EduGuide branding (no references to other projects)
- Chat interface for natural language Q&A

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the frontend:**
   ```bash
   npm run dev
   ```
3. **Open in your browser:**
   - Go to http://localhost:5173

## API
- The frontend expects the backend to be running at http://localhost:8000 (default FastAPI port)
- You can change the API endpoint in the code if needed

## Notes
- Make sure the backend is running and the vectorstore is built before chatting
- You can customize the UI and add more features as needed
