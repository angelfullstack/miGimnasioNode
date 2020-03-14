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

/* GET http://localhost:3000/api/profesores/ */
router.get("/:id", async (req, res) => {
  try {
    const rows = await Profesor.getById(req.params.id);
    if (rows.length === 1) {
      res.json(rows[0]);
    } else {
      res.json("Profesor no encontrado");
    }
  } catch (err) {
    res.json(err);
  }
});

/* POST http://localhost:3000/api/profesores/ */
router.post("/", async (req, res) => {
  try {
    const result = await Profesor.create(req.body);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "Error en la petición crear profesor" });
    }
  } catch (err) {
    res.json(err);
  }
});

/* DELETE http://localhost:3000/api/profesores/ */
router.delete("/:id", async (req, res) => {
  try {
    const result = await Profesor.deleteById(req.params.id);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "El profesor no existe" });
    }
  } catch (err) {
    res.json(err);
  }
});

/* PUT http://localhost:3000/api/profesores/ */
router.put("/:id", async (req, res) => {
  try {
    //Aunque se supone que en el ejercicio hay que pasar todos los datos, creo un parseador para que en el caso de que los datos no estén completos en el body se sustituyan por los de la fila original.
    let profesor = await Profesor.getById(req.params.id);
    if (req.body.nombre == undefined) {
      req.body.nombre = profesor[0].nombre;
    }
    if (req.body.experiencia == undefined) {
      req.body.experiencia = profesor[0].experiencia;
    }
    const result = await Profesor.updateById(req.body, req.params.id);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "El profesor no existe" });
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
