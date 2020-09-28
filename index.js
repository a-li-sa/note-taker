const express = require("express");
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
// =============================================================
app.use(routes);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});