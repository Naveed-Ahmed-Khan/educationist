import parentModel from "../models/parentModel.js";
import bcrypt from 'bcrypt';

export const addParent = async (req, res) =>{
    const { studentName, fatherName, email, whatsapp, country, city, password } = req.body;
    try {
        const existingParent = await parentModel.findOne({ email });
        if(existingParent) return res.status(400).json({ message: "Parent Already Exists" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await parentModel.create({
            studentName,
            fatherName,
            email,
            whatsapp,
            country,
            city,
            password: hashedPassword,
        });
        res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
}