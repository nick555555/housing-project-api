const express = require('express');
// Sets up the Express App
// =============================================================
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Add routes, both API and view
app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});
// app.listen(PORT, function () {
//     console.log('App listening on PORT ' + PORT);
// });