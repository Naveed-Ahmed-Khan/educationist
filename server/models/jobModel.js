import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    studentName: { type: String, required: true },
    applicantName: { type: String, required: true },
    subject: { type: String, reqiured: true },
    requirement: { type: String, required: true },
    budget: { type: String, required: true },
    reuiredTutor: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    mode: { type: String, reqiured: true },
    id: { type: String },
});

export default mongoose.model("Jobs", jobSchema);