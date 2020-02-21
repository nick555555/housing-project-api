const db = require("../models");

//Defining methods for the accountsController
module.exports = {
    findAll: function(req, res) {
        db.Account
            .find(req.query)
            .then(account_DB => res.json(account_DB))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Account
            .findById(req.params.id)
            .then(account_DB => res.json(account_DB))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Account
            .create(req.body)
            .then(account_DB => res.json(account_DB))
            .catch(err => res.status(422).json(err));
    }
};