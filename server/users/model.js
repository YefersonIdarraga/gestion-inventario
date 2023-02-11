import mongoose from "mongoose";
import { userSchema } from "./schema.js";

export const userModel = mongoose.model("users", userSchema)