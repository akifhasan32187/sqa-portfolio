import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // CV download route
  app.get("/api/download-cv", (req, res) => {
    const cvPath = path.join(__dirname, "../client/public/S_M_Ashraful_Hasan.pdf");

    if (!fs.existsSync(cvPath)) {
      return res.status(404).json({ message: "CV file not found" });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=S_M_Ashraful_Hasan.pdf');

    const fileStream = fs.createReadStream(cvPath);
    fileStream.pipe(res);
  });

  const httpServer = createServer(app);
  return httpServer;
}