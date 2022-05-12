const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const pondRoutes = require('./pond-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/pond', pondRoutes);

module.exports = router;
