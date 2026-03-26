# Asante Kelvin — Portfolio

Full-stack developer portfolio built with the MERN stack, containerized with Docker.

## Tech Stack
- **Frontend:** React + Vite + TypeScript + TailwindCSS
- **Backend:** Node.js + Express + TypeScript
- **Database:** MongoDB
- **DevOps:** Docker + Docker Compose

## Getting Started

### With Docker (recommended)
```bash
docker-compose up --build
```

### Without Docker
```bash
# Terminal 1 — Server
cd server && npm install && npm run dev

# Terminal 2 — Client
cd client && npm install && npm run dev
```

## Project Structure
```
portfolio/
├── client/          → React + Vite frontend
├── server/          → Express + MongoDB backend
├── docker-compose.yml
└── README.md
```

## Deployment
- Frontend → Vercel
- Backend  → Render
