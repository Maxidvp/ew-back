import mongoose from "mongoose";
import config from "config";

async function connect() {
  const URI_DB = config.get<string>("URI_DB");
  const DB_NAME = config.get<string>("DB_NAME");

  try {
    await mongoose.connect(URI_DB, {dbName: DB_NAME});
    console.log("DB connected successfully ");
  } catch (error: any) {
    console.log("Could not connect to db \n" + error);
  }
}

export default connect;
