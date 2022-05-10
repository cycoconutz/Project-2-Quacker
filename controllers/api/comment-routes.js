const router = require('express').Router();
const { Post, User, Comment, ProfileImage } = require('../../models');

// get ALL comments
router.get('/', async (req, res) => {
  try {
  const dbCommentData = await Comment.findAll({

  })

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
  })
  // if there is no comment with that ID...cannot be found
  if (!dbCommentData) {
      res.status(404).json({ message: "This comment cannot be found."});
      return
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
    const dbCommentData = await Comment.create({
      message: req.body.message,
      likes: req.body.likes,
      // need to capture user ID 
      // need to capture post ID
      // something to do with sessions and passport?
    });

      res.status(200).json(dbCommentData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete comment
router.delete("/:id", async (req, res) => {
  try {
  const deletePost = await Post.destroy({
      where: { id: req.params.id },
  })
  // If there is no comment with that ID...cannot be found
  if (!dbCommentData) {
    res.status(404).json({ message: "This comment cannot be found."});
    return
}

  res.json(deletePost);

} catch (err) {
  console.log(err);
  if (err) throw err;
}
});

// Update Post
router.put("/:id", async (req, res) => {
  try {
  const updatePost = await Post.update({
      where: { id: req.params.id,
      },
  })
  // if there is no comment with that ID...
  if (!dbCommentData) {
    res.status(404).json({ message: "This comment cannot be found."});
    return
}

  res.json(updatePost);

} catch (err) {
  console.log(err);
  if (err) throw err;
}
});

module.exports = router;