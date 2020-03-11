var router = require("express").Router();
const Profesor = require("../../models/profesor");

/* GET users listing. */
router.get("/", async (req, res) => {
  const rows = await Profesor.getAll();
  res.json(rows);
});


module.exports = router;
