const express = require('express');
const cors = require("cors");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: ["https://mhauthority.herokuapp.com/"],
    credentials: true
}));

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
app.get("/api/accounts/:id", (req, res) =>{
    db.Account.findOne({
        where: {
            userID: req.params.id
        }
    }).then((data) => {
        res.json(data);
    })
})
app.post("/api/accounts", (req, res) => {
    db.Account.create(req.body).then(data => {
        res.json(data)
    })
})

//sync({force: false})
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});
// app.listen(PORT, function () {
//     console.log('App listening on PORT ' + PORT);
// });