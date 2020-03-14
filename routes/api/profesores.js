var router = require("express").Router();
const Profesor = require("../../models/profesor");

/* GET http://localhost:3000/api/profesores/ */
router.get("/", async (req, res) => {
  try {
    const rows = await Profesor.getAll();
    res.json(rows);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const rows = await Profesor.getById(req.params.id);
    res.json(rows[0])
  }catch(err){
    res.json(err);
  }
});

/* POST http://localhost:3000/api/profesores/ */
router.post("/", async (req, res) => {
  try {
    const result = await Profesor.create(req.body);
    if (result["affectedRows"] === 1) {
      const student = await Student.getById(result["insertId"]);
    } else {
      res.json({ error: "Error que me sale de la nariz" });
    }
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;
