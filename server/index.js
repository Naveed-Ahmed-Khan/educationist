import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import parentRoutes from './routes/parentRoutes.js';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// routes
app.use('/addParents', parentRoutes);

//port
const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`));