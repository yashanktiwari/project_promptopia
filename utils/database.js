import mongoose from 'mongoose';

let isConnected = false; // track the status of the connection

export const connectToDB = async () => {
  // If we do not do this, then we are gonna get warning on the console again and again
  mongoose.set('strictQuery', true);
  if(isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch(error) {
    console.log(error);
  }
}