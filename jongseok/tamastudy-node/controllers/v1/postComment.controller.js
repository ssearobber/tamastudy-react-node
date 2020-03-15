const asyncHandler = require('../../middleware/asyncHandler');
const Post = require('../../database/models/Post');
const PostComment = require('../../database/models/PostComment');
const User = require('../../database//models/User');

// Private
// GET
// createPostComment
// postman uri ex
// http://localhost:4000/v1/post/:postId/comment/create
exports.createPostComment = asyncHandler(async (req, res, next) => {
  const postComment = await PostComment.create({
    ...req.body,
    user: req.currentUserId,
    post: req.params.postId,
  });

  const user = await User.findById({ _id: req.currentUserId });
  user.postComments.push(postComment._id);
  await user.save();

  const post = await Post.findById({ _id: req.params.postId });
  post.postComments.push(postComment._id);
  await post.save();

  res.status(201).json({
    success: true,
    error: null,
    data: postComment,
  });
});

// Public
// GET
// getPostComments
// postman uri ex
// http://localhost:4000/v1/post/:postId/comment
exports.getPostComments = asyncHandler(async (req, res, next) => {
  const postComments = await PostComment.find({ post: req.params.postId })
    .sort({ createdAt: -1 })
    .select('-post');

  res.status(200).json({
    success: true,
    error: null,
    data: postComments,
  });
});
