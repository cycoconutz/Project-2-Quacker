const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const pondRoutes = require("./pond-routes.js");
const postRoutes = require("./post-routes");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/pond", pondRoutes);
router.use("/post", postRoutes);

module.exports = router;
