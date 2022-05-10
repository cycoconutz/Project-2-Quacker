const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComment = require("./commentData");
const seedProfileImages = require("./profileImage");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  await seedProfileImages();

  process.exit(0);
};

seedAll();
