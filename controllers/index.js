const router = require("express").Router();
const express = require("express");

const app = express();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const pondfeedRoutes = require("./pondfeed-routes");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/pondfeed", pondfeedRoutes);

module.exports = router;
