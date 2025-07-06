# Backend - SEO Headline Generator

This is the backend server for the SEO Headline Generator app. It is built with Node.js and Express.

## Features
- REST API for generating and regenerating SEO headlines
- Simulates Google rating and review count
- CORS enabled for frontend communication

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server
```sh
npm start
```
The server will run on `http://localhost:3000` by default.

### Environment Variables
- You can set the `PORT` variable in a `.env` file to change the server port.

### API Endpoints
- `POST /business-data` — Generate SEO headlines
- `GET /regenerate-headline` — Regenerate a headline for a business

---


