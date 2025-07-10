// models/Candidate.ts
import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  position: String,
});

export default mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);

