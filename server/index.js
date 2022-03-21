import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import parentRoutes from './routes/parentRoutes.js';
import tutorRoutes from './routes/tutorRoutes.js';
import jobRoutes from './routes/jobRoutes.js';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// routes
app.use('/addParents', parentRoutes);
app.use('/addTutor', tutorRoutes);
app.use('/addJob', jobRoutes);

//port
const PORT = 5000;
//connection url
const CONNECTION_URL = 'mongodb://localhost:27017/educationist';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Running on port:  ${PORT}`))
    })
    .catch((error) => console.log(error.message));

/* app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`)); */