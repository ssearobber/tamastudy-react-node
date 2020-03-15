const express = require('express');
const {
  getPosts,
  createPost,
  getPostById,
  deletePostById,
  updatePostById,
} = require('../../controllers/v1/post.controller');
const postCommentRouter = require('./postComment.route');

// middleware
const { getCurrentUserId } = require('../../middleware/auth');

const router = express.Router();

// merge Route
router.use('/:postId', postCommentRouter);

// 컨트롤러를 불러온다. (즉, 이전에 작성했던 '로직'만 컨트롤러로 옮겼다고 생각하면 된다.)

router.route('/').get(getPosts);
router.route('/create').post(getCurrentUserId, createPost);
router.route('/:postId').get(getPostById);
router.route('/delete/:postId').delete(getCurrentUserId, deletePostById);
router.route('/update/:postId').put(getCurrentUserId, updatePostById);

module.exports = router;
