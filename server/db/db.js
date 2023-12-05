import mongoose from "mongoose";

export default async() => {
    try {
        mongoose.set("strictQuery", false);
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            `MongoDB conectado en ${db.connection.host}:${db.connection.port}`
        );
    } catch (error) {
        console.error(`Error al conectar con MongoDB: ${error}`);
        process.exit(1);
    }
};