const { ProfileImage } = require('../models');

const profileImageData = [
  {
    id: 1,
    filename: 'duck-graphic-01.png',
    description: 'Duck with a hat on with a thumbs up.',
  },
  {
    id: 2,
    filename: 'fierce-white.jpg',
    description: 'Big muscular white duck.',
  },
  {
    id: 3,
    filename: 'wild-green.jpg',
    description: 'fierce green duck with a scary smile.',
  },
];

const seedProfileImages = () => ProfileImage.bulkCreate(profileImageData);

module.exports = seedProfileImages;
