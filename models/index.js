const User = require('./User');
const Gallery = require('./Gallery');
const ProfileImage = require('./ProfileImage');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, ProfileImage };
