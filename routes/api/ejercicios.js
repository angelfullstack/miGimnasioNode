var router = require("express").Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("ejercicios");
});

module.exports = router;
