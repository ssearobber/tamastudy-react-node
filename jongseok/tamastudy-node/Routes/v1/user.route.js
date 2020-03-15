const express = require('express');
const { signup } = require('../../controllers/v1/user.controller');

const router = express.Router();

// 컨트롤러를 불러온다. (즉, 이전에 작성했던 '로직'만 컨트롤러로 옮겼다고 생각하면 된다.)

router.route('/singup').post(signup);

module.exports = router;
