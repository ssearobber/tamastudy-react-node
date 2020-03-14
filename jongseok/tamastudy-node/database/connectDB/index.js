const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://whdtjr2792:!canyou12@cluster0-mgk1n.gcp.mongodb.net/tamastudy-react-node?retryWrites=true&w=majority';

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
