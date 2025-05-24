import express from "express";

const route = express.Router()

route.post("/",(res,req)=>{
    res.send("hi");
})