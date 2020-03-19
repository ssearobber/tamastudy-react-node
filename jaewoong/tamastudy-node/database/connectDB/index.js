const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || '';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('DB접속 완료');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
