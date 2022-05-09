const { User } = require('../models');

const userdata = [
  {
    first_name: 'John',
    last_name: 'Smith',
    username: 'JSmith',
    password: 'password123',
    email: 'johnsmith@fakeemail.com',
  },
  {
    first_name: 'Wyatt',
    last_name: 'Crawford',
    username: 'Wyattford',
    password: 'password123',
    email: 'wyattcrawford@fakeemail.com',
  },
  {
    first_name: 'Mia',
    last_name: 'Jarvis',
    username: 'MJarvis',
    password: 'password123',
    email: 'miajarvis@fakeemail.com',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
