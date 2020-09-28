const router = require('express').Router();
const routesController = require('../controller/routesController');
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.route('/')
  .get(routesController.htmlIndex);
router.route('/notes')
  .get(routesController.htmlNotes);
module.exports = router;