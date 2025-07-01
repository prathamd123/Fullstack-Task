# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

### d. Register an Admin Account (Required)
After starting the backend, you must register an admin account to access the admin panel. Send a POST request to:

```
POST http://localhost:5000/api/admin/register
Content-Type: application/json

{
  "username": "your_admin_username",
  "password": "your_admin_password"
}
```

You can use a tool like Postman, Insomnia, or `curl`:
```bash
curl -X POST http://localhost:5000/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{"username": "your_admin_username", "password": "your_admin_password"}'
```

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
