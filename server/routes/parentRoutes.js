import express from 'express';
//import controller
import { addParent } from '../controllers/parentController.js';

const router = express.Router();

//add route to controller
router.post('/addParent', addParent);

export default router;