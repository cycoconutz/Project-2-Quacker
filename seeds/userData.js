const { User } = require('../models');

const userData = [
  {
    first_name: 'John',
    last_name: 'Smith',
    username: 'JSmith',
    password: 'password123',
    email: 'johnsmith@fakeemail.com',
    profile_image: 1,
  },
  {
    first_name: 'Wyatt',
    last_name: 'Crawford',
    username: 'Wyattford',
    password: 'password123',
    email: 'wyattcrawford@fakeemail.com',
    profile_image: 2,
  },
  {
    first_name: 'Mia',
    last_name: 'Jarvis',
    username: 'MJarvis',
    password: 'password123',
    email: 'miajarvis@fakeemail.com',
    profile_image: 3,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
