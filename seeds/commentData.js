const { Comment } = require("../models");

const commentdata = [
  {
    message: "I really like Quacker too!",
    likes: 0,
    post_id: 1,
    user_id: 3,
  },
  {
    message: "I did not know that!",
    likes: 0,
    post_id: 3,
    user_id: 1,
  },
  {
    message: "That's neat!",
    likes: 0,
    post_id: 4,
    user_id: 3,
  },
  {
    message: "Barbie has a full name?!",
    likes: 0,
    post_id: 5,
    user_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
