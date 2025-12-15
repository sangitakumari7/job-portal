import mongoose from "mongoose";

const connectDb= async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected successfully");
    }
    catch(error){
        console.log("Error in DB connection");
    }
}
export default connectDb;