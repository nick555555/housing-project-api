const router = require("express").Router();
const accountsController = require("../../controllers/accountsController");

// Matches with "/api/books"
router.route("/")
  .get(accountsController.findAll)
  .post(accountsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(accountsController.findById)

module.exports = router;