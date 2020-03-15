var router = require("express").Router();
const Cliente = require("../../models/cliente");

/* GET http://localhost:3000/api/clientes/ */
router.get("/", async (req, res) => {
  try {
    const rows = await Cliente.getAll();
    res.json(rows);
  } catch (err) {
    res.json(err);
  }
});

/* GET http://localhost:3000/api/clientes/ */
router.get("/:id", async (req, res) => {
  try {
    const rows = await Cliente.getById(req.params.id);
    if (rows.length === 1) {
      res.json(rows[0]);
    } else {
      res.json("Cliente no encontrado");
    }
  } catch (err) {
    res.json(err);
  }
});

/* POST http://localhost:3000/api/clientes/ */
router.post("/", async (req, res) => {
  try {
    const result = await Cliente.create(req.body);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "Error en la petición crear cliente" });
    }
  } catch (err) {
    res.json(err);
  }
});

/* DELETE http://localhost:3000/api/clientes/ */
router.delete("/:id", async (req, res) => {
  try {
    const result = await Cliente.deleteById(req.params.id);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "El cliente no existe" });
    }
  } catch (err) {
    res.json(err);
  }
});

/* PUT http://localhost:3000/api/clientes/ */
router.put("/:id", async (req, res) => {
  try {
    let cliente = await Cliente.getById(req.params.id);
    if (req.body.nombre == undefined) {
      req.body.nombre = cliente[0].nombre;
    }
    if (req.body.apellidos == undefined) {
      req.body.apellidos = cliente[0].apellidos;
    }
    if (req.body.direccion == undefined) {
      req.body.direccion = cliente[0].direccion;
    }
    if (req.body.email == undefined) {
      req.body.email = cliente[0].email;
    }
    if (req.body.edad == undefined) {
      req.body.edad = cliente[0].edad;
    }
    if (req.body.sexo == undefined) {
      req.body.sexo = cliente[0].sexo;
    }
    if (req.body.cuota == undefined) {
      req.body.cuota = cliente[0].cuota;
    }
    if (req.body.fecha_nacimiento == undefined) {
      req.body.fecha_nacimiento = cliente[0].fecha_nacimiento;
    }
    if (req.body.dni == undefined) {
      req.body.dni = cliente[0].dni;
    }
    if (req.body.fk_profesor == undefined) {
      req.body.fk_profesor = cliente[0].fk_profesor;
    }

    const result = await Cliente.updateById(req.body, req.params.id);
    if (result["affectedRows"] === 1) {
      res.json(result);
    } else {
      res.json({ error: "El cliente no existe" });
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
