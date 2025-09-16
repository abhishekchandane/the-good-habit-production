import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import  foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"

import 'dotenv/config.js';



// App Config
const app = express() 
const port = 4000 

// Middleware
app.use( express.json() )
app.use( cors() )



// DB Connection
connectDB();

// API Endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.get( "/", (req, res)=>{
    res.send("API IS WORKING")
} )


app.listen (port, ()=>{
    console.log(` Working !!!!   ON http://localhost:${ port }`)
} )


// 
