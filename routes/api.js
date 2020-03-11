var router = require("express").Router();

/* GET users listing. */
router.get("/", function(req, res) {
  res.send("Holi");
});


/*recuperar, crear, editar y borrar los datos 
tablas clientes, ejercicios y profesores.Para la creación de datos dentro de la tabla clientes se debe tener en cuenta que todos los campos,excepto la fecha de creación son obligatorios y además el DNI debe tener un formato válido.Para realizar la edición de un registro de cualquiera de las tablas se deben pasar a través del cuerpo de lapetición todos los datos a editar y además el ID del registro a editar.Se valorará la modularización de las diferentes acciones */

module.exports = router;
