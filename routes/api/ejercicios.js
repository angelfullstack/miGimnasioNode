var router = require("express").Router();
const Ejercicio = require("../../models/ejercicio");

/* GET http://localhost:3000/api/ejercicios/ */
router.get("/", async (req, res) => {
  try {
    const rows = await Ejercicio.getAll();
    res.json(rows);
  } catch (err) {
    res.json(err);
  }
});

/* GET http://localhost:3000/api/ejercicios/ */
router.get("/:id", async (req, res) => {
  try {
    const rows = await Ejercicio.getById(req.params.id);
    if (rows.length === 1) {
      res.json(rows[0]);
    } else {
      res.json("Ejercicio no encontrado");
    }
  } catch (err) {
    res.json(err);
  }
});

/* POST http://localhost:3000/api/ejercicios/ */
router.post("/", async (req, res) => {
  try {
    const result = await Ejercicio.create(req.body);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "Error en la petición crear ejercicio" });
    }
  } catch (err) {
    res.json(err);
  }
});

/* DELETE http://localhost:3000/api/ejercicios/ */
router.delete("/:id", async (req, res) => {
  try {
    const result = await Ejercicio.deleteById(req.params.id);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "El ejercicio no existe" });
    }
  } catch (err) {
    res.json(err);
  }
});

/* PUT http://localhost:3000/api/profesores/ */
router.put("/:id", async (req, res) => {
  try {
    //Aunque se supone que en el ejercicio hay que pasar todos los datos, creo un parseador para que en el caso de que los datos no estén completos en el body se sustituyan por los de la fila original.
    let ejercicio = await Ejercicio.getById(req.params.id);
    if (req.body.titulo == undefined) {
      req.body.titulo = ejercicio[0].titulo;
    }
    if (req.body.duracion == undefined) {
      req.body.duracion = ejercicio[0].experiencia;
    }
    if (req.body.repeticiones == undefined) {
      req.body.repeticiones = ejercicio[0].repeticiones;
    }
    const result = await Ejercicio.updateById(req.body, req.params.id);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "El ejercicio no existe" });
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
