"use server";

import mongoose from "mongoose"

const connection: {
  instance?: mongoose.ConnectionStates
} = {};

export const connectToDb = async () => {
  try {
    if (connection.instance) {
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.instance = db.connections[0].readyState;
  } catch (error) {
    console.error(">> Error while connected database:", error.message);
  }
};