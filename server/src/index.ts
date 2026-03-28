import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import contactRoutes from "./routes/contact.routes";
import projectRoutes from "./routes/project.routes";
import blogRoutes from "./routes/blog.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://portfolio-tlcj.vercel.app/" // ← your real Vercel URL
        : "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/blog", blogRoutes);

// ─── Health check ─────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running 🚀" });
});

// ─── Start ────────────────────────────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
