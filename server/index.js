import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import { userRouter } from "./users/router.js";
import { productRouter } from "./productos/router.js";

mongoose.set('strictQuery', false);

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Dominio permitido
    optionsSuccessStatus: 200 // Necesario para evitar el código de estado 204
  };
  
app.use(cors(corsOptions));
  

// MIDDLEWARE

app.use(express.json())
app.use("/users", userRouter)
app.use("/products", productRouter)

app.listen(3000, () => mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectado a MongoDB')).catch((error) => console.error(error)))