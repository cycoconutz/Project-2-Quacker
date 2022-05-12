// post page routes
const router = require('express').Router();
const { Post, User, Comment, ProfileImage } = require("../models");

// // get single post
// router.get('/:id', async (req, res) => {
//     try {
//       const dbPostData = await Post.findAll({
//         where: { id: req.params.id },
//         attributes: [
//             "id",
//             "message",
//             "likes",
//             "user_id",
//             "createdAt"
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ["username"]
//             },
//             {
//                 model: Comment, 
//                 attributes: [
//                         "id",
//                         "message",
//                         "likes",
//                         "post_id",
//                         "user_id"
//                 ]
//             }
//         ]
        
//       });
//       let post = dbPostData.map(post => post.get({ plain: true }));
      
  
//       res.render("post", {
//           post: {
//               message,
//               likes,
//               user_id
//           }
//       });
//       console.log(dbPostData);
//     } catch (err) {
//       console.log(err);
//       if (err) throw err;
//       res.status(500).json(err);
//     }
//   });

//   // get single comment
// router.get('/:id', async (req, res) => {
//     try {
//     const dbCommentData = await Comment.findOne({
//         where: { id: req.params.id },
//     })
//     // if there is no comment with that ID...cannot be found
//     if (!dbCommentData) {
//         res.status(404).json({ message: "This comment cannot be found."});
//         return
//     }
  
//     res.status(200).json(dbCommentData);
  
//   } catch (err) {
//     console.log(err);
//     if (err) throw err;
//   }
//   });
  
  module.exports = router;