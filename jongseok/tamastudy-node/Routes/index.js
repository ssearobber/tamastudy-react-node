const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/posts', async (req, res, next) => {
  try {
    let limit = 7;
    if (req.query) {
      limit = parseInt(req.query.limit);
    }
    const posts = await Post.find().limit(limit);
    res.status(200).json({
      success: true,
      error: null,
      result: posts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
      result: null,
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
    // const post = await Post.create({...req.body})
    res.status(200).json({
      success: true,
      error: null,
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      result: null,
    });
  }
});

module.exports = router;
//export default sldkfjsdlf
