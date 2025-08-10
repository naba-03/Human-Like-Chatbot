# AI-Chatbot

A human-like conversational chatbot that demonstrates empathy, contextual awareness, memory, and long-term conversation handling. Built for the STAN Internship Challenge.

---

## Architecture

- **Frontend**: HTML/CSS/JS (ChatGPT-style UI)
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **AI**: OpenAI GPT API
- **Memory**: Session + Long-Term via `userId`

---

## Features

- New Chat & Session Management
- Persistent Memory across Sessions
- Chat History Sidebar like ChatGPT
- Context-aware and Emotionally Responsive
- Uses OpenAI's API

---

## Setup Instructions

### Prerequisites

- Node.js v18+
- PostgreSQL running
- OpenAI API Key

1. ## Clone the repository.

2. ## Create a `.env` file and add your Gemini API key:
   ```env
   OPENAI_API_KEY=your-key
    DATABASE_URL=your-database-url
    PORT=3000
   ```
3. ## Installation

   Install all required dependencies using:

   ```bash
   npm install
   ```
4. ## Start the Server:
   ```bash
   npm run dev
   ```

5. ## Running the Chatbot Frontend

   Make sure your `.env` file contains a valid `OPENAI_API_KEY`.

   Then run the chatbot UI using:

   ```bash
   Right click on test.html click on Open with Live Server
##  Example Prompt Format

```
You are Liora, a human-like, emotionally intelligent AI chatbot...
Here is the prior conversation:
<User's 5 recent messages>
User: What's your name?
Liora:
```
##  Contact

Developed by Pooja H Y.

