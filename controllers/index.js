const router = require("express").Router();
const express = require("express");

const app = express();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
