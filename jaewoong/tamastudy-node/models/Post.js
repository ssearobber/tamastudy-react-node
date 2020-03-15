const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//몽구스 문법
const postSchema = new Schema({
  title: {
    type: String,
    required: [true, '타이틀을 입력해주세요'],
  },
  description: {
    type: String,
    required: [true, '타이틀을 입력해주세요'],
  },
  username: {
    type: String,
    required: [true, '타이틀을 입력해주세요'],
  },
  imgUrl: {
    type: String,
    required: [true, '이미지주소를 입력해주세요'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('post', postSchema);
