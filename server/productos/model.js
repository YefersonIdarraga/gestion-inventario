import mongoose from "mongoose";
import { productSchema } from "./schema.js";

export const productModel = mongoose.model("products", productSchema)