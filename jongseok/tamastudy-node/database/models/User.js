const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validateEmail = inputEmail => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(inputEmail);
};

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, '유저명을 입력해주세요.'],
  },
  email: {
    type: String,
    required: [true, '이메일을 입력해주세요. '],
    unique: [true, '해당 이메일이 존재합니다. '],
    validate: [validateEmail, '정상적인 이메일을 입력해주세요. '],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '정상적인 이메일을 입력해주세요. '],
  },
  password: {
    type: String,
    required: [true, '패스워드를 입력해주세요. '],
    trim: true,
  },
  profileImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
