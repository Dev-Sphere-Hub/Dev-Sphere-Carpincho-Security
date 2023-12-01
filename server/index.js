import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import conectarDB from "./db/db.js";

const PORT = process.env.PORT || 5000;

(async () => {
  await conectarDB();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("¡Hola, mundo!");
  });



  app.listen(PORT, () => {
    console.log(`Servidor arrancado en el http://localhost:${PORT}`);
  });
})();
