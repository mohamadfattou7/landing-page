import mongoose from 'mongoose';

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not defined in environment variables.');
  }

  // Improved error logging
  return mongoose.connect(uri).catch(err => {
    console.error("MongoDB connection error:", err);
    throw err;
  });
}






