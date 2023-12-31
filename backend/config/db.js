require("dotenv").config();
const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URI);
const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
