import mongoose from "mongoose";
import 'dotenv/config'

const dbConnect = process.env.Mongo_uri 

export const dbConnection = async () =>{
   try {
     await mongoose.connect(dbConnect)
     console.log('DataBase is connected')
   } catch (error) {
    console.log(error)
   }
}