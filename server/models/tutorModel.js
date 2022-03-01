import mongoose from "mongoose";

const tutorSchema = mongoose.Schema({
    tutorName: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
    city: { type: String, required: true },
    institute: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
});

export default mongoose.model("Tutors", tutorSchema);