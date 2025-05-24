import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";

dotenv.config();

const app = express();

app.use(bodyParser.json()); // Ensure JSON request parsing
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
    methods:["POST","GET","PATCH","UPDATE"]
}))

const port = process.env.PORT;

app.listen(port,()=>{
    connectDB();
    console.log("Backend Initiated");
})