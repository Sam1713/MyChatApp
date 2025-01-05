import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from '../backend/routes/UserRoute.js'
import connectDB from './config/ConnectDB.js';

dotenv.config();
const app = express();
connectDB()
// Enable CORS for all routes
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data



//Q7gw2dZUN4TLDIU2
//samsaju399
// Sample route
app.get('/getChats', (req, res) => {
  res.status(200).json({ message: "success" });
});

app.use('/user',userRoute)

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Port is running on ${Port}`));
