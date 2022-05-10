const router = require("express").Router();
const { User, Post, Comment, ProfileImage } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all Posts for homepage
router.get("/", async (req, res) => {
  console.log("req.session", req.session);
  try {
    const dbPostData = await Post.findAll({
      attributes: [
        "id",
        "message",
        "likes",
        "user_id",
        "createdAt",
      ],
      order: [[ "createdAt", "DESC" ]],
          include: [
            {
              model: Comment,
              attributes: [ "id", "message", "likes", "post_id", "user_id"],
              order: [[ "createdAt", "DESC" ]],
              include: {
                model: User,
                attributes: ["username", "id"],
              },
            },
            // {
            //   model: User,
            //   attributes: [ "username", "id" ],
            // },
          ],
        })
    
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    console.log(dbPostData);
    console.log(posts);

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


router.get("/login", (req, res) => {
  // if already logged in, render homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  // if not logged in redirect to login page
  res.render("/login");
})

// GET one post *****
// Use the custom middleware before allowing the user to access the post withAuth
// Error: Failed to lookup view "post" in views directory 
// "C:\Users\hunte\Desktop\Coding-Bootcamp\Group-Projects\Project-2-Quacker\views"
// needs handlebar view
router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findOne(req.params.id, {
      attributes: [
        "id",
        "message",
        "likes",
        "createdAt",
      ],
        include: [
          {
            model: Comment,
            attributes: [ "id", "message", "likes", "post_id", "user_id", "createdAt"],
            order: [[ "createdAt", "DESC" ]],
            include: {
              model: User,
              attributes: [ "username", "id" ],
            },
            // {
            //   model: User,
            //   attributes: [ "username", "id" ],
            // },
          },
        ],
      })

      console.log("Post Data", dbPostData);

      // if post doesnt exist...
      if (!dbPostData) {
        res.status(404).json({ message: "Post does not exist."});
      }

    const post = dbPostData.get({ plain: true });
    res.render("post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get User
router.get("/user/:id", async (req, res) => {
  try {
    const dbUserData = await User.findOne(req.params.id, {
      attributes: [
        "id",
        "first_name",
        "last_name",
        "username",
      ],
        include: [
          {
            model: Post,
            attributes: [ "id", "message", "likes", "user_id"],
            order: [[ "createdAt", "DESC" ]],
            include: {
              model: Comment,
              attributes: ["id", "message", "likes"],
            },
          },
          {
            model: User,
            attributes: [ "username", "id" ],
          },
        ],
      })

      // if no user exists
      if (!dbUserData) {
        res.status(404).json({ message: "User doesn't exist."});
      };

      console.log("User Data", dbUserData);

    const post = dbUserData.get({ plain: true });
    res.render("user", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one painting
// // Use the custom middleware before allowing the user to access the painting withAuth,
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
