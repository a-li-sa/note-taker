const router = require('express').Router();
const notesController = require('../../../controller/notesController');
// GET /api/songs
// POST /api/songs
router.route('/')
  .get(notesController.getDb)
  .post(notesController.addNote);
router.route('/:id')
  .delete(notesController.deleteNote);
module.exports = router;