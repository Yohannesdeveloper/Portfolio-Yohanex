import express from "express";
import cors from "cors";
import { createServer } from "@vercel/node"; // vercel runtime

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working on Vercel 🚀" });
});

export default app;
