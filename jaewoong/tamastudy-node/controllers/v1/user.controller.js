const asyncHandler = require('../../middleware/asyncHandler');
const User = require('../../database/models/User');
const createJWT = require('../../util/user/createJWT');

// Public
// post
// signup
// postman uri ex
// http://localhost:4000/v1/user/signup
exports.signup = asyncHandler(async (req, res, next) => {
  // try catch 를 미들웨어 형식으로 설정
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      error: `${req.body.email}는 존재하는 이메일입니다. `,
      data: null,
    });
  }
  const newUser = await User.create({ ...req.body }); // ...req.body 문법은 body안에 있는 모든값을 갖어오는 것
  const token = await createJWT(newUser._id);
  res.status(201).json({
    success: true,
    error: null,
    data: token,
  });
});

// Public
// post
// signin
// postman uri ex
// http://localhost:4000/v1/user/signin
exports.signin = asyncHandler(async (req, res, next) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    return res.status(400).json({
      success: false,
      error: `${req.body.email}는 존재하지 않는 이메일입니다. `,
      data: null,
    });
  }
  const isCorrectPassword = existingUser.matchPassword(req.body.password); // token 해석하는 부분
  if (!isCorrectPassword) {
    return res.status(401).json({
      success: false,
      error: `패스워드가 일치하지 않습니다. `,
      data: null,
    });
  }
  const token = await createJWT(existingUser._id); // 몽구DB의 유일한 ID값
  res.status(200).json({
    success: true,
    error: null,
    data: token,
  });
});

// Private
// get
// users
// postman uri ex
// http://localhost:4000/v1/user/users
exports.users = asyncHandler(async (req, res, next) => {
  const users = await User.find()
    .populate({
      path: 'posts',
      model: 'Post',
    })
    .select('-password');
  res.status(200).json({
    success: true,
    error: null,
    data: users,
  });
});

// Private
// get
// me
// postman uri ex
// http://localhost:4000/v1/user/me
exports.me = asyncHandler(async (req, res, next) => {
  const me = await User.findOne({ _id: req.currentUserId })
    .populate({
      path: 'posts',
      model: 'Post',
      select: '_id',
    })
    .populate({
      path: 'postComments',
      model: 'PostComment',
      select: '_id',
    })
    .select('-password');
  res.status(200).json({
    success: true,
    error: null,
    data: me,
  });
});
