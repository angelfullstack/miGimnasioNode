var router = require("express").Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("clientes");
});

module.exports = router;
