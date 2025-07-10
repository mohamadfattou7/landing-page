import mongoose from "mongoose";
import dotenv from "dotenv";
// npm install dotenv
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI as string;
console.log(MONGODB_URI , ' MONGODB_URIMONGODB_URIMONGODB_URIMONGODB_URI'); 
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Attach the cache to globalThis to avoid re-creating on hot reloads
const globalAny = global as typeof globalThis & {
  _mongoose: MongooseCache;
};

if (!globalAny._mongoose) {
  globalAny._mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (globalAny._mongoose.conn) return globalAny._mongoose.conn;

  if (!globalAny._mongoose.promise) {
    globalAny._mongoose.promise = mongoose.connect(MONGODB_URI, {
      dbName: process.env.dbName,
    });
  }

  globalAny._mongoose.conn = await globalAny._mongoose.promise;
  return globalAny._mongoose.conn;
}


