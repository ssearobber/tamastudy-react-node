<<<<<<< HEAD
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ success: true, message: '접속 성공 !' });
});
router.get('/post', (req, res, next) => {
  // throw Error('post 에러');
  const post = [
    {
      id: 1,
      title: 'node',
    },
    {
      id: 2,
      title: 'ruby',
    },
  ];
  res.json({ success: true, data: post });
});

module.exports = router;
=======
const express = require('express')
const router = express.Router()
const v1 = require('./v1')
const v2 = require('./v2')

router.use('/v1', v1)
router.use('/v2', v2)

module.exports = router
>>>>>>> 499864177e8793580944b8f34fdbe6200e872b10
