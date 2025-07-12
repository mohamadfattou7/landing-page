// types/mongoose.d.ts
//import type mongoose from "mongoose";
/// <reference types="mongoose" />
declare global {
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

