const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const ProfileImage = require('./ProfileImage');
// HAS MANY LEFT || BELONGS TO RIGHT

User.hasMany(Post, {
  foreignKey: 'user_id',
  // onDelete: 'CASCADE'
});

// Post Belongs to user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  // onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  // onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  // onDelete: 'CASCADE'
});

ProfileImage.hasMany(User, {
  foreignKey: 'profileImage_id',
});

// Profile Images
User.belongsTo(ProfileImage, {
  foreignKey: "profileImage_id",
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  // onDelete: "CASCADE"
});

// // user belongs to profileimage
// User.belongsTo(ProfileImage);
module.exports = {
  User,
  Comment,
  Post,
  ProfileImage,
};
