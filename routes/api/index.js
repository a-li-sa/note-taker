const router = require('express').Router();
const notesRoutes = require('./notes');
// /api
router.use('/notes', notesRoutes);
module.exports = router;