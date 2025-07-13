import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);




