const errorResponse = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: '에러 발생' });
};

module.exports = errorResponse;
