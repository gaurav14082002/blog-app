import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js"; 
import blogRoute from "./routes/blogRoute.js"; 
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors({
    origin: ["http://localhost:3000", 
    "https://blog-application-rho-pink.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methodss
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true // If using cookies or authentication
  }));

app.use(express.json());
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
app.use(cookieParser())


const PORT = process.env.PORT || 8000;

//setup db connection
const mongo_db = process.env.MONGO_URL
try{
mongoose.connect(mongo_db);
console.log("db connected successfully")
}catch(error){
    console.log(error)
}

//setup cloudinary connection

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

app.use("/api/users",userRoute);
app.use("/api/blog",blogRoute);


app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("hello ji")
})