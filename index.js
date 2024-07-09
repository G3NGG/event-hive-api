import express from 'express'
import mongoose from 'mongoose'
import { dbConnection } from './config/DB.js';
import 'dotenv/config'
import { routerApp } from './route/college_route.js';




// coonectting tto database
dbConnection();

// creating an Express app
const app = express();
app.use(routerApp);

// middleware
app.use(express.json())






//Listening to port
const PORT =4400
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})