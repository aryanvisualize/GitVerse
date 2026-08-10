<div align="center">

# 🌐 GitVerse

### A full-stack, GitHub-inspired platform for discovering, sharing, and managing repositories.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://gitverse-26yg.onrender.com)
[![License: ISC](https://img.shields.io/badge/license-ISC-blue?style=for-the-badge)](#-license)
[![Made with Node.js](https://img.shields.io/badge/node.js-backend-339933?style=for-the-badge&logo=node.js&logoColor=white)](#-tech-stack)
[![MongoDB](https://img.shields.io/badge/mongodb-database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](#-tech-stack)

[Live Demo](https://gitverse-26yg.onrender.com) · [Report Bug](https://github.com/aryanvisualize/GitVerse/issues) · [Request Feature](https://github.com/aryanvisualize/GitVerse/issues)

</div>

---

## 📑 Table of Contents

<details open>
<summary>Click to expand/collapse</summary>

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#️-environment-variables)
- [API Overview](#-api-overview)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

</details>

---

## 📖 About

**GitVerse** reimagines the core GitHub experience — discovering, sharing, and managing repositories — as a focused, full-stack web application. It's built to explore how authentication, session management, and repository-centric data models come together in a real-world MERN-style app, using **GitHub OAuth** for login instead of a custom auth system.

---

## ✨ Features

<details>
<summary><strong>🔐 Authentication</strong></summary>

- Sign in with GitHub via Passport.js (`passport-github2`)
- Session-based auth with `express-session`
- Secure, cookie-based persistent login

</details>

<details>
<summary><strong>📂 Repository Management</strong></summary>

- Discover and browse repositories
- Share and manage your own repository listings
- MongoDB-backed persistent storage via Mongoose

</details>

<details>
<summary><strong>⚙️ Platform</strong></summary>

- RESTful API built with Express 5
- CORS-enabled for cross-origin frontend/backend communication
- Environment-based configuration with `dotenv`

</details>

> 💡 **Note:** This list is based on the current repo structure. Expand it with your actual feature set (search, filters, starring, comments, etc.) as you add them.

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### Backend
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express%205-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat-square)
![Passport.js](https://img.shields.io/badge/-Passport.js-34E27A?style=flat-square&logo=passport&logoColor=white)

- Express.js 5
- Mongoose (MongoDB ODM)
- Passport.js + `passport-github2` (GitHub OAuth)
- `express-session` for session handling
- `cors`, `dotenv`

</td>
<td valign="top" width="50%">

### Frontend
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)

- React-based client (see `/frontend`)

The frontend is built with React 19 and Vite for a fast, modern development experience, styled using Tailwind CSS 4 (via the official Vite plugin). Routing is handled with React Router v7, toast notifications with react-hot-toast, and icons via react-icons. Code quality is enforced with ESLint, including React Hooks and React Refresh plugins for a smooth dev workflow.

</td>
</tr>
</table>

---

## 📁 Project Structure

```
GitVerse/
│
├── backend/
│   └── server.js          # Express entry point
│
├── frontend/               # Client application
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

<details>
<summary><strong>1️⃣ Clone the repository</strong></summary>

```bash
git clone https://github.com/aryanvisualize/GitVerse.git
cd GitVerse
```

</details>

<details>
<summary><strong>2️⃣ Install dependencies</strong></summary>

```bash
# Root/backend dependencies
npm install

# Frontend dependencies
npm install --prefix frontend
```

</details>

<details>
<summary><strong>3️⃣ Configure environment variables</strong></summary>

Create a `.env` file in the project root (see [Environment Variables](#️-environment-variables) below).

</details>

<details>
<summary><strong>4️⃣ Run in development</strong></summary>

```bash
npm run dev
```

</details>

<details>
<summary><strong>5️⃣ Build for production</strong></summary>

```bash
npm run build
npm start
```

</details>

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
GITHUB_CALLBACK_URL=http://localhost:5000/auth/github/callback

SESSION_SECRET=your_session_secret
FRONTEND_URL=http://localhost:5173
```

> 🔑 You'll need to register an OAuth app in your [GitHub Developer Settings](https://github.com/settings/developers) to get a client ID and secret.

---

## 📡 API Overview

| Method | Endpoint | Description |
|--------|----------|--------------|
| `GET`  | `/auth/github` | Redirects to GitHub OAuth login |
| `GET`  | `/auth/github/callback` | GitHub OAuth callback handler |
| `GET`  | `/api/repos` | Fetch repositories |
| `POST` | `/api/repos` | Create/share a new repository entry |

> ✏️ Update this table with your actual route names — this is a starting template based on the auth stack detected in your `package.json`.

---

## 🗺️ Roadmap

- [ ] Repository search & filtering
- [ ] Star / bookmark repositories
- [ ] User profile pages
- [ ] Comment or discussion threads
- [ ] Deploy CI/CD pipeline

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

<div align="center">

**Aryan Rastogi**

[![GitHub](https://img.shields.io/badge/GitHub-aryanvisualize-181717?style=flat-square&logo=github)](https://github.com/aryanvisualize)

If you found this project useful, don't forget to ⭐ the repo!

</div>
