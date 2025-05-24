import mongoose from "mongoose";

//structrue of user details
var data = new mongoose.Schema(  
    {
        userData : {
        }
    }
        
)

const userData = mongoose.model("userData",data);

export default userData;