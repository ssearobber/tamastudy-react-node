const express = require('express');
const { createPostComment } = require('../../controllers/v1/postComment.controller');

// middleware
const { getCurrentUserId } = require('../../middleware/auth');

const router = express.Router({ mergeParams: true });

// 컨트롤러를 불러온다. (즉, 이전에 작성했던 '로직'만 컨트롤러로 옮겼다고 생각하면 된다.)

router.route('/create').post(getCurrentUserId, createPostComment);

module.exports = router;
