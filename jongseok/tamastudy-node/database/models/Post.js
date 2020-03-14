const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, '타이틀을 입력해주세요. '],
  },
  description: {
    type: String,
    required: [true, '본문을 입력해주세요. '],
  },
  username: {
    type: String,
    required: [true, '유저명을 입력해주세요. '],
  },
  imgUrl: {
    type: String,
    required: [true, '이미지주소를 입력해주세요.'],
  },
  view: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
