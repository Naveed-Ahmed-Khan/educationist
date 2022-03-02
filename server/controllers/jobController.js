import jobModel from "../models/jobModel.js";

export const addJob = async (req, res) => {
    const { studentName, applicantName, subject, requirment, budget, requiredTutor, city, country, mode } = req.body;
    try {
        const result = await jobModel.create({
            studentName,
            applicantName,
            subject,
            requirment,
            budget, 
            requiredTutor,
            city,
            country,
            mode,
        });
        res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
}