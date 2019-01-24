// module to define the routes used in the node application

const router = require('express').Router();
module.exports = router;
router.use('/user', require('./user'));
router.use('/daily', require('./daily'));
