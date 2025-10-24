# PLP Task Manager

A responsive **React.js** application built with **JSX** and **Tailwind CSS v4**.  
This project demonstrates **component architecture**, **state management**, **hooks usage**, **API integration**, and **MongoDB Atlas backend integration**.

---

## Table of Contents

- [Features](#features)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Running the App](#running-the-app)  
- [Screenshots](#screenshots)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Add, delete, and manage tasks  
- Filter tasks: All / Active / Completed  
- Dark and Light mode toggle  
- API integration to fetch tasks from a backend server  
- MongoDB Atlas connection for persistent data storage  
- Responsive UI with **Tailwind CSS v4**  

---

## Project Structure

root/
├─ node_modules/
├─ public/
│ └─ favicon.ico
├─ src/
│ ├─ components/
│ │ ├─ Button.jsx
│ │ ├─ TaskManager.jsx
│ │ ├─ Navbar.jsx
│ │ ├─ Footer.jsx
│ │ ├─ Card.jsx
│ │ └─ APIData.jsx
│ ├─ hooks/
│ │ └─ useLocalStorageTasks.jsx
│ ├─ context/
│ │ └─ ThemeContext.jsx
│ ├─ pages/
│ │ └─ Home.jsx
│ ├─ App.jsx
│ ├─ index.jsx
│ └─ index.css
├─ .env
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
├─ README.md
└─ .gitignore

yaml
Copy code

---

## Installation

1. Clone the repository:

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd react-js-jsx-and-css-mastering-front-end-development-DEV-EVELYNE
Install dependencies:

bash
Copy code
npm install
Environment Variables
Create a .env file at the root with the following:

ini
Copy code
VITE_API_URL=http://localhost:5183/api/tasks
MONGO_URI=<Your MongoDB Atlas connection string>
PORT=5183
Replace <Your MongoDB Atlas connection string> with your actual MongoDB connection URI.

Running the App
Start the backend server:

bash
Copy code
node index.js
Server should run on http://localhost:5183 and connect to MongoDB Atlas.

Start the frontend:

bash
Copy code
npm run dev
Open http://localhost:5173 in your browser.

Screenshots
Light Mode

Dark Mode

Task Manager

API Data

Add your actual screenshots in screenshots/ folder.

Deployment
You can deploy this project using Vercel, Netlify, or GitHub Pages.

Build the frontend:

bash
Copy code
npm run build
Deploy the dist/ folder to your hosting platform.

Add your deployed URL here: Deployed App