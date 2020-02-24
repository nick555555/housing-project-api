const express = require('express');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/accounts", (req, res) => {
    db.Account.findAll().then(accounts => {
        res.json(accounts);
    })
})
app.post("/api/accounts", (req, res) => {
    db.Account.create(req.body).then(data => {
        res.json(data)
    })
})

//sync({force: false})
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});
// app.listen(PORT, function () {
//     console.log('App listening on PORT ' + PORT);
// });