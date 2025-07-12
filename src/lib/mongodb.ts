import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.dbname;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable.");
}
if (!DB_NAME) {
  throw new Error("❌ Please define the dbname environment variable.");
}

const mongoUri: string = MONGODB_URI; // assert it's string now

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  _mongoose?: MongooseCache;
};

if (!globalWithMongoose._mongoose) {
  globalWithMongoose._mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  const mongooseCache = globalWithMongoose._mongoose!;

  if (mongooseCache.conn) return mongooseCache.conn;

  if (!mongooseCache.promise) {
    mongooseCache.promise = mongoose.connect(mongoUri, {
      dbName: DB_NAME,
    });
  }

  mongooseCache.conn = await mongooseCache.promise;
  return mongooseCache.conn;
}




