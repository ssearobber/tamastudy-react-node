const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI | '';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('DB접속 완료'.bgBlue.white);
  } catch (error) {
    console.log(error.bgRed.white);
    process.exit(1);
  }
};

module.exports = connectDB;
