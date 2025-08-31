# Contact Form API

This is a backend service for handling 'Contact Us' form submissions.

## Features
- REST API with Express.js
- MongoDB with Mongoose
- Input validation with express-validator
- Pagination for contact list
- Error handling & CORS enabled

## Setup Instructions

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set your MongoDB URI.

3. Run the project:
   ```bash
   npm run dev
   ```

4. API Endpoints:
   - `POST /api/contact` – Submit contact form
   - `GET /api/contacts` – Get all contacts (paginated)
   - `GET /api/contacts/:id` – Get single contact by ID
