import express from 'express';
//import controller
import { addJob } from '../controllers/jobController.js';

const router = express.Router();

//add route to controller
router.post('/addJob', addJob);

export default router;