import mongoose from "mongoose";

const mongodbURL = process.env.MONGODB_URI;

if (!mongodbURL) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = global.mongoose;

if (!cached) {

  cached = global.mongoose = {
    conn: null,
    promise: null,
  };

}

async function ConnectDB() {

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {

    cached.promise = mongoose.connect(mongodbURL, {
      dbName: "INK&THREAD",
    });

  }

  cached.conn = await cached.promise;

  return cached.conn;
}

export default ConnectDB;