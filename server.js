
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'



dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
connectDB()
app.get('/',(req,res)=>{
    res.send(' task-manager Server running ')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));