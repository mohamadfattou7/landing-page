// models/Candidate.ts
import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  position: { type: String },
  experience: { type: String },
  availability: { type: String },
  salary: { type: String },
});

export default mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);


