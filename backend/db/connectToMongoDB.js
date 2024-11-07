import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connect Mongo DB");
  } catch (error) {
    console.log("eroor connecting Mongo DB", error.message);
  }
};

export default ConnectToMongoDB;
