import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app=express()

const Port=process.env.PORT||5000
app.listen(5000,console.log("Port is running ", Port))