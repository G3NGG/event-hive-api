import express from 'express'
import mongoose from 'mongoose'
import { dbConnection } from './config/DB.js';
import 'dotenv/config'



// coonectting tto database
dbConnection();

// creating an Express app
const app = express();

// middleware
app.use(express.json())





//Listening to port
const PORT =4400
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})