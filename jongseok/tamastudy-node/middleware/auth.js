const jwt = require('jsonwebtoken');

exports.getCurrentUserId = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]; // Bearer 부분을 떼버림
  }
  if (!token) {
    return next('페이지 접근이 제한되었습니다.');
  }
  try {
    const JWT_SECRET = process.env.JWT_SECRET || '';
    const currentUserId = await jwt.verify(token, JWT_SECRET).userId;
    req.currentUserId = currentUserId;
    next();
  } catch (error) {
    next(error);
  }
};
