const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ all: true, nested: true }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  const message = req.message
  try {
    const newPost = await Post.create({
      ...message,
      username: req.session.userId
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
