const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/posts', async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      success: true,
      error: null,
      results: posts,
    });
  } catch (error) {
    error.log(error);
    res.status(400).json({
      success: true,
      error: error.message,
      results: posts,
    });
  }
});
router.post('/post/create', async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      username: req.body.username,
      imgUrl: req.body.imgUrl,
    });
    res.status(200).json({
      success: true,
      error: null,
      results: post,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
      results: posts,
    });
  }
  // throw Error('post 에러');
  // res.json({ success: true, data: post });
});

module.exports = router;
