const { Post } = require("../models");

const postdata = [
  {
    message: "I really love Quacker!",
    likes: 0,
    user_id: 1,
  },
  {
    message: "Quacker is really cool!",
    likes: 0,
    user_id: 2,
  },
  {
    message: "Did you know ackwards is an old English dialect word that describes a creature lying on its back that can't get up.",
    likes: 0,
    user_id: 2,
  },
  {
    message: "I just learned that modern brunch was first proposed in 1895 as a post-hangover meal.",
    likes: 0,
    user_id: 3,
  },
  {
    message: "Did you know Barbie's full name is Barbara Millicent Roberts?",
    likes: 0,
    user_id: 1,
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
