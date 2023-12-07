import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import conectarDB from "./db/db.js";
import routes from './api/routes/index.js';

const PORT = process.env.PORT || 5000;

(async() => {
    await conectarDB();
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send("¡Hola, mundo!");
    });
    app.use('/', routes);


    app.listen(PORT, () => {
        console.log(`Servidor arrancado en el http://localhost:${PORT}`);
    });

})();