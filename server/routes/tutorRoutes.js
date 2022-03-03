import express from 'express';
//import controller
import { addTutor } from '../controllers/tutorController.js';

const router = express.Router();

//add route to controller
/* router.get('/getTutor', getTutor) */
router.post('/addTutor', addTutor);

export default router;