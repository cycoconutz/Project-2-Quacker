const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const ProfileImage = require("./ProfileImage");

// HAS MANY LEFT || BELONGS TO RIGHT

// Post Belongs to user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
// user has many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE' 
});

// Comments
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

// Profile Images
ProfileImage.hasMany(User, {
  foreignKey: 'profileimage_id',
});
// user belongs to profileimage
User.belongsTo(ProfileImage);


module.exports = {
  User,
  Comment,
  Post,
  ProfileImage

};