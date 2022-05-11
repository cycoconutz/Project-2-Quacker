const router = require("express").Router();
const express = require("express");

const app = express();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const pondRoutes = require("./pond-routes");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/pond", pondRoutes);

module.exports = router;
