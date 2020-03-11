var router = require("express").Router();
const Cliente = require("../../models/cliente");

/* GET users listing. */
router.get("/", async (req, res) => {
  const rows = await Cliente.getAll();
  res.json(rows);
});

module.exports = router;
