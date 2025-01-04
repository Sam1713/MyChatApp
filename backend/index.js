import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

// Enable CORS for all routes
app.use(cors());

// Sample route
app.get('/getChats', (req, res) => {
  res.status(200).json({ message: "success" });
});

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Port is running on ${Port}`));
