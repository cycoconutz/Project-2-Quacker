const router = require('express').Router();
const { Post, User, Comment, ProfileImage } = require('../models');
const withAuth = require('../utils/auth');



// CREATE new post
router.post('/', withAuth, async (req, res) => {
  console.log('entered the post req');
  try {
    const newPost = await Post.create({
      attributes: ['username'],
      include: [{ model: User }],
      ...req.body,
    });
    res.status(200).json(newPost + req.session.username);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete post
router.delete('/:id', async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: { id: req.params.id },
    });
    res.json(deletePost);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// Update Post
router.put('/:id', async (req, res) => {
  try {
    const updatePost = await Post.update({
      where: { id: req.params.id },
    });
    res.json(updatePost);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});


module.exports = router;
