const router = require('express').Router();
const { User, Post, Comment, ProfileImage } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

//Populates Pond with All Posts
router.get('/pond', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ all: true, nested: true }]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('pond', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Loads Homepage
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/pond');
    return;
  }
  res.render('homepage');
});

//Loads Signup Page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/pond');
    return;
  }
  res.render('signup');
});

//Loads Pond
router.get('/pond', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('pond');
});

module.exports = router;
