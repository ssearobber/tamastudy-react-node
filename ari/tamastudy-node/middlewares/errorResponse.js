const errorResponse = (err, req, res, next) => {
  // console.log(err);
  // console.log(err.stack);
  res.status(500).json({ success: true, massage: '에러가 났어요!!' });
  next();
};

module.exports = errorResponse;
