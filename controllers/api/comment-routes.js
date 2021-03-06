const router = require('express').Router();
const { Post, User, Comment, ProfileImage } = require('../../models');

// get ALL comments
router.get('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({});

    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// get single comment
router.get('/:id', async (req, res) => {
  try {
    const dbCommentData = await Comment.findOne({
      where: { id: req.params.id },
    });
    // if there is no comment with that ID...cannot be found
    if (!dbCommentData) {
      res.status(404).json({ message: 'This comment cannot be found.' });
      return;
    }

    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// CREATE new comment
router.post('/', async (req, res) => {
  try {
    console.log('NEW REQ' + req.session);
    console.log('NEW REQ' + req.session.user_id);
    const dbCommentData = await Comment.create({
      message: req.body.message,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete comment
router.delete('/:id', async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    // If there is no comment with that ID...cannot be found
    if (!deleteComment) {
      res.status(404).json({ message: 'This comment cannot be found.' });
      return;
    }

    res.json(deleteComment);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// update Comment
router.put("/:id", async (req, res) => {
  try {
  const updateComment = await Comment.update(
      {
          message: req.body.message,
          likes: req.body.likes,
          user_id: req.body.user_id
      },
      {
          where: {
              id: req.params.id,
          },
      }
  );
      return res.json(updateComment)
    
    } catch (err) {
      if (err) throw err;

    }
});



module.exports = router;
