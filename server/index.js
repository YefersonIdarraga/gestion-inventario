import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./users/router.js";

const uri = "mongodb+srv://Yeferson:STnBJlcVDOe50j8y@cluster0.8cuvcrf.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);


const app = express();

// MIDDLEWARE

app.use(express.json())
app.use("/users", userRouter)

app.listen(3000, () => mongoose.connect(uri))