import mongoose from "mongoose";

const parentSchema = mongoose.Schema({
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
});

export default mongoose.model("Parents", parentSchema);