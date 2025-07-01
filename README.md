# Full Stack Task

A MERN stack project with separate backend (Node.js/Express/MongoDB) and frontend (React/Vite) applications.

---

## Project Structure

```
Full Stack Task/
  backend/    # Node.js/Express/MongoDB API
  frontend/   # React (Vite) frontend
```

---

## Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud, e.g. MongoDB Atlas)

---

## 1. Clone the Repository
```bash
git clone <your-repo-url>
cd "Full Stack Task"
```

---

## 2. Backend Setup

### a. Install Dependencies
```bash
cd backend
npm install
```

### b. Environment Variables
Create a `.env` file in the `backend/` directory:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### c. Run the Backend
```bash
npm run dev   # For development (with nodemon)
# or
npm start     # For production
```

The backend will run on `http://localhost:5000` by default.

---

## 3. Frontend Setup

### a. Install Dependencies
```bash
cd ../frontend
npm install
```

### b. Environment Variables
Create a `.env` file in the `frontend/` directory:
```
VITE_API_URL=http://localhost:5000
```

### c. Run the Frontend
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` by default.

---

## 4. Usage
- Visit `http://localhost:5173` in your browser.
- For admin access, go to `/admin-login` and log in with your admin credentials.

---

## 5. Notes
- Make sure MongoDB is running and accessible.
- Uploaded files are stored in `backend/uploads/` (ensure this folder exists and is writable).
- For production, update environment variables accordingly.

---

## 6. Deployment
- Deploy backend and frontend separately (e.g., Render, Vercel, Netlify).
- For static hosting, set up rewrite rules to serve `index.html` for all routes.

---

## 7. License
MIT
