import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
        username: String,
        email: String, //faltaba el email
        password: String
    });