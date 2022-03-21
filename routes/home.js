const router = require('express').Router();
const homeController = require('../app/home/home.controller');

router.get('/', homeController.index);

module.exports = router;
