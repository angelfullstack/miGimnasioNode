var router = require("express").Router();
const Ejercicio = require("../../models/ejercicio");

/* GET users listing. */
router.get("/", async (req, res) => {
  const rows = await Ejercicio.getAll();
  res.json(rows);
});

module.exports = router;
