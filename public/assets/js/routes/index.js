const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
//   * GET `/notes` - Should return the `notes.html` file.
router.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', '..', "index.html"));
})
//  * GET `*` - Should return the `index.html` file
router.get('/notes', (req, res) => {
  return res.sendFile(path.join(__dirname, '..', '..', "notes.html"));
})
module.exports = router;