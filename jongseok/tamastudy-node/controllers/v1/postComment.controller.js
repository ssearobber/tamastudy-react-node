const asyncHandler = require('../../middleware/asyncHandler');
const Post = require('../../database/models/Post');
const PostComment = require('../../database/models/PostComment');
const User = require('../../database//models/User');

// Public
// GET
// getPosts
// postman uri ex
// http://localhost:4000/v1/post
exports.createPostComment = asyncHandler(async (req, res, next) => {
  const postComment = await PostComment.create({
    ...req.body,
    user: req.currentUserId,
    post: req.params.postId,
  });
  res.status(201).json({
    success: true,
    error: null,
    data: postComment,
  });
});
