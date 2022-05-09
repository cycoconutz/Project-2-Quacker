const User = require('./User');
<<<<<<< HEAD
const Gallery = require('./Gallery');
const ProfileImage = require('./ProfileImage');
=======
const Post = require('./Post');
const Comment = require('./Comment');
>>>>>>> main

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

<<<<<<< HEAD
module.exports = { User, Gallery, ProfileImage };
=======
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};
>>>>>>> main
