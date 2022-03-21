import tutorModel from "../models/tutorModel.js";
import bcrypt from 'bcrypt';

/* export const getTutor = async (req, res) => {
    try {
        const tutors = await tutorModel.find();     
        res.status(200).json(tutors);   
    } catch (error) {
        console.log(error);
    }
} */

export const addTutor = async (req, res) => {
    const { tutorName, email, whatsapp, city, institute, password, qualification, subjects, level, mode, experience } = req.body;
    try {
        const existingTutor = await tutorModel.findOne({ email });
        if(existingTutor) return res.status(400).json({ message: "Tutor Already Exists" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await tutorModel.create({
            tutorName,
            email,
            whatsapp, 
            city,
            institute, 
            password: hashedPassword,
            qualification,  
            subjects,
            level, 
            mode,
            experience,
        })
        res.status(200).json({ result });
    } catch (error) {
        console.log(error)
    }
}