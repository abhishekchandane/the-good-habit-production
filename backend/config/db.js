

import mongoose from "mongoose";

export const connectDB = async ( ) =>{
    await mongoose.connect('mongodb+srv://abhishekc:355435@cluster0.85dmiqz.mongodb.net/good_habits').then(() => console.log('DB Connected'))
}