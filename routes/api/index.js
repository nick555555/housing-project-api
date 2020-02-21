const router = require("express").Router();
const accountRoutes = require("./accounts");

// Account routes
router.use("/accounts", accountRoutes);

module.exports = router;