const router = require('express').Router();
const { Post, User, Comment, ProfileImage } = require('../../models');
const withAuth = require('../../utils/auth');

// get ALL posts
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      // exclude creation and updated date, can remove and will work fine
      include: [{ all: true, nested: true }],

      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

// get single post
router.get('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: { id: req.params.id },
    });

    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});

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
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletePost = await Post.destroy({
//       where: { id: req.params.id },
//     });
//     res.json(deletePost);
//   } catch (err) {
//     console.log(err);
//     if (err) throw err;
//   }
// });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletePost) {
      res.status(404).json({ message: 'No post was found with that Id' });
      return;
    }
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
    if (err) throw err;
  }
});
// router.delete('/:id', async (req, res) => {
//   // delete on tag by its `id` value
//   try {
//     const tagData = await Tag.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(tagData);
//     if (!tagData) {
//       res.status(404).json({ message: 'No tag was found' });
//       return;
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Update Post
router.put('/:id', async (req, res) => {
  try {
    const updatePost = await Post.update(
      {
        message: req.body.message,
        likes: req.body.likes,
        post_id: req.body.post_id,
        user_id: req.body.user_id
      },
      {
        where: {
          id: req.params.id
        },
      }
    );
    return res.json(updatePost);

  } catch (err) {
    res.status(500).json(err);
  }
});



// Update Likes
// Found this example online
// Model.update(
//   { seq: sequelize.literal('seq + 5') },
//   { where: { id: model_id } }
// );
router.put('/', async (req, res) => {
  try {
    const updateLikes = await Post.update(
      { seq: likes.literal('seq + 1') },
      {
        where: { id: Post.id }
      });
    res.json(updateLikes);
  } catch (err) {
    console.log(err);
    if (err) throw err;
  }
});



// // Do we need these?
// // Login
// router.post('/login', async (req, res) => {
//   try {
//     const dbUserData = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!dbUserData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }

//     const validPassword = await dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password. Please try again!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res
//         .status(200)
//         .json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Logout
// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
