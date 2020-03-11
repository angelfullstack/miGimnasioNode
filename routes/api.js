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
