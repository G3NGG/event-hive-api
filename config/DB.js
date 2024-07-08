import mongoose from "mongoose";
import 'dotenv/config'

const dbConnect = process.env.MONGO_URI

export const dbConnection = async () =>{
   try {
     await mongoose.connect(dbConnect)
     console.log('DataBase is connected')
   } catch (error) {
    console.log(error)
   }
}