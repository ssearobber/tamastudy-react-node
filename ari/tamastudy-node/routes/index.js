const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ success: true, massage: '접속성공!' });
});
router.get('/post', (req, res, next) => {
  //   throw Error;
  // throw Error('post error!!');
  const post = [
    { id: 1, title: 'node1' },
    { id: 2, title: 'node2' },
  ];
  res.json({ success: true, data: post });
});
//파일통채로
module.exports = router; //old
//변수 단위로
// module.export = {
//     router
// }
// export default router; //new 바벨 필요함
