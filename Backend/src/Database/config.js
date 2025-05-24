import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB);
        console.log("Connection Host : ",connect.connection.host);
        console.log("Connection Name : ",connect.connection.name);
        console.log("Connection Port : ",connect.connection.port);
    }
    catch(error){
        console.log("Error while connecting to Database -> ",error.message);
    }
}

export default connectDB;