import mongoose from "mongoose";

// Replace the conncetion url with your database url
const mongoUrl = 'connection-url-here'

const connetToMongo= () => {
    mongoose.connect(mongoUrl,()=>console.log("Databse Connected"))
}

export default connetToMongo