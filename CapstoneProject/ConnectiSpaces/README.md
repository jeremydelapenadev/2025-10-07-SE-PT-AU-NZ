# System Requirements

- Node.js (v18+ recommended)
- npm
- MongoDB (local or cloud via MongoDB Atlas)
- Git
- Code editor (e.g., VS Code)

## Project Structure

connectispaces/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
└── README.md

## Environment Variables

Create a .env file in the backend:

`PORT=8080
MONGO_URI=your_mongodb_connection_string
GEOAPIFY_API_KEY=your_api_key`

## Installation

1. Clone Repository

`git clone <your-repo-url>
cd connectispaces`

2. Install Dependencies

Backend:

`cd backend
npm install`

Frontend:

`cd frontend
npm install`

3. Run the Application

Backend:

`npm start`

Frontend:

`npm run dev`

4. (Optional) Run Both Concurrently

In root package.json:

`"scripts": {
  "dev": "concurrently \"cd backend && npm start\" \"cd frontend && npm run dev\""
}`

Then run:

`npm run dev

## Testing
Use Thunder Client or Postman to test API endpoints:

`/api/spaces
/api/users
/api/reviews
/api/favourites`

## Database Setup
- Ensure MongoDB is running
- Seed initial data (users, spaces) if required
- Use MongoDB Compass for inspection