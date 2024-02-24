import mongoose from "mongoose";

export const db = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"JOB_SEEKING",
    }).then(()=>{
        console.log("connected to db")
    }).catch((err) => {
        console.log("not connected");
    })
}