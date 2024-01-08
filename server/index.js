import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import conectarDB from "./db/db.js";
import routes from './api/routes/index.js';

const PORT = process.env.PORT || 5000;


await conectarDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
    limit: 10000,
}))
app.use(
    fileUpload({
        useTempFiles: true,
        limits: {
            fileSize: 6144 * 6144 // 6 MB
        },
        abortOnLimit: true
    }));

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send("¡Hola, mundo!");
});
app.use('/', routes);
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Servidor arrancado en el http://localhost:${PORT}`);
    });
}


export default app;