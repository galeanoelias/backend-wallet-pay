import mongoose from "mongoose";

async function connect() {
  const db_uri =process.env.DB_URI
  try {
    await mongoose.connect(db_uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Could not connect to db \n" + error);
  }
}

export default connect;