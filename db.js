const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://milan:milan@cluster0.pdthd.mongodb.net/<dbname>?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log("mongo connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// connectDB();

module.exports = connectDB;
