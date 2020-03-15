const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM clientes", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

const getById = id => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM clientes where id = ?", [id], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

/**
 *create
 *@param {string}nombre
 *@param {string}apellidos
 *@param {string}direccion
 *@param {string}email
 *@param {number}edad
 *@param {string}sexo
 *@param {number}cuota
 *@param {string}fecha_nacimiento -(yyyy:MM:dd)
 *@param {string}dni
 *@param {number}fk_profesor
 */
const create = ({
  nombre,
  apellidos,
  direccion,
  email,
  edad,
  sexo,
  cuota,
  fecha_nacimiento,
  dni,
  fk_profesor
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO clientes (nombre,apellidos,direccion,email,edad,sexo,fecha_inscripcion,cuota,fecha_nacimiento,dni,fk_profesor) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        nombre,
        apellidos,
        direccion,
        email,
        edad,
        sexo,
        new Date(),
        cuota,
        fecha_nacimiento,
        dni,
        fk_profesor
      ],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

const deleteById = id => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM clientes WHERE id = ?", [id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

/**
 *create
 *@param {string}nombre
 *@param {string}apellidos
 *@param {string}direccion
 *@param {string}email
 *@param {number}edad
 *@param {string}sexo
 *@param {number}cuota
 *@param {string}fecha_nacimiento -(yyyy:MM:dd)
 *@param {string}dni
 *@param {number}fk_profesor
 */

const updateById = (
  {
    nombre,
    apellidos,
    direccion,
    email,
    edad,
    sexo,
    cuota,
    fecha_nacimiento,
    dni,
    fk_profesor
  },
  id
) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE clientes SET nombre=?,apellidos=?,direccion=?,email=?,edad=?,sexo=?,cuota=?,fecha_nacimiento=?,dni=?,fk_profesor=? WHERE id=?",
      [
        nombre,
        apellidos,
        direccion,
        email,
        edad,
        sexo,
        cuota,
        fecha_nacimiento,
        dni,
        fk_profesor,
        id
      ],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

module.exports = {
  getAll: getAll,
  getById: getById,
  create: create,
  deleteById,
  deleteById,
  updateById: updateById
};


