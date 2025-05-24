import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json()); // Ensure JSON request parsing
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
    methods:["POST","GET","PATCH","UPDATE"]
}))

app.listen(4000,()=>{
    console.log("Backend Initiated");
})