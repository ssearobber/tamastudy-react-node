const errorResponse = (err, req, res, next) => {
<<<<<<< HEAD
  console.error(err);
  res.status(500).json({ success: false, message: '에러 발생' });
};

module.exports = errorResponse;
=======
    console.error(err)
    res.status(500).json({ success: false, message: '뭔가 에러가 발생했어요.' })
}

module.exports = errorResponse
>>>>>>> 499864177e8793580944b8f34fdbe6200e872b10
