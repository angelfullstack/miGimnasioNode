//De momento las ID se pasan por parámetro.
//Una buena forma de modularizar podría ser que las funciones getAll, getById y delete se hicieran en un modelo genérico en el que se pasara como parámetro en nombre de la tabla a la que afectar. Lo intentaré tener a lo largo del día de mañana


var router = require("express").Router();
var clientesRouter = require("./api/clientes");
var profesoresRouter = require("./api/profesores");
var ejerciciosRouter = require("./api/ejercicios");

/* http://localhost:3000/api/clientes */
router.use("/clientes", clientesRouter);

/* http://localhost:3000/api/profesores */
router.use("/profesores", profesoresRouter);

/* http://localhost:3000/api/ejercicios */
router.use("/ejercicios", ejerciciosRouter);


module.exports = router;
/* El ejercicio consiste en la creación de una aplicación Rest API que nos permita interactuar con los datos de la
base de datos de Gimnasios.
El servidor, generado a través de Express:
Debe responder a las diferentes rutas que nos permitan recuperar, crear, editar y borrar los datos de
las tablas clientes, ejercicios y profesores.
Para la creación de datos dentro de la tabla clientes se debe tener en cuenta que todos los campos,
excepto la fecha de creación son obligatorios y además el DNI debe tener un formato válido.
Para realizar la edición de un registro de cualquiera de las tablas se deben pasar a través del cuerpo de la
petición todos los datos a editar y además el ID del registro a editar.
Se valorará la modularización de las diferentes acciones. */