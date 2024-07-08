import express from 'express'





// creating an Express app
const app = express();

// middleware
app.use(express.json())





//Listening to port
const PORT =4400
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})