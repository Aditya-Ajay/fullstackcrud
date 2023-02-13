import mongoose from "mongoose";
const mongoConn = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/People");
    console.log(`DATABASE CONNECTED SUCCESFULLY`);
  } catch (err) {
    console.log(`THERE IS SOME ${err}`);
  }
};

mongoConn();
export default mongoConn;

//  The connection is established here and the document is created in the database
