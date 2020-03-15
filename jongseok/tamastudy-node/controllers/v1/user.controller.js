const User = require('../../database/models/User');
const createJWT = require('../../util/user/createJWT');

// post
// signup
// postman uri ex
// http://localhost:4000/v1/user/signup
exports.signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: `${req.body.email}는 존재하는 이메일입니다. `,
        data: null,
      });
    }
    const newUser = await User.create({ ...req.body });
    const token = await createJWT(newUser._id);
    res.status(201).json({
      success: true,
      error: null,
      data: token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
      data: null,
    });
  }
};

// post
// signin
// postman uri ex
// http://localhost:4000/v1/user/signin
exports.signin = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        error: `${req.body.email}는 존재하지 않는 이메일입니다. `,
        data: null,
      });
    }
    const isCorrectPassword = existingUser.matchPassword(req.body.password);
    if (!isCorrectPassword) {
      return res.status(401).json({
        success: false,
        error: `패스워드가 일치하지 않습니다. `,
        data: null,
      });
    }
    const token = await createJWT(existingUser._id);
    res.status(200).json({
      success: true,
      error: null,
      data: token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
      data: null,
    });
  }
};
