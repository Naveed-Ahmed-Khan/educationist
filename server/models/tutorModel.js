import mongoose from "mongoose";

const tutorSchema = mongoose.Schema({
    tutorName: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
    city: { type: String, required: true },
    institute: { type: String, required: true },
    password: { type: String, required: true },
    qualification: { type: String, required: true },
    subjects: {
        type: [String],
        default: [],
    },
    level: { type: String, required: true },
    mode: { type: String, required: true },
    experience: { type: String, required: true },
    id: { type: String },
});

export default mongoose.model("Tutors", tutorSchema);