const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM ejercicios", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

const getById = id => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM ejercicios where id = ?", [id], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

/** 
*create:
*@param {string}titulo
*@param {string(hh:mm:ss)}duracion
*@param {number}repeticiones 
*/
const create = ({ titulo, duracion,repeticiones }) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO ejercicios (titulo,duracion,repeticiones) VALUES (?,?,?)",
      [titulo, duracion, repeticiones],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

const deleteById = id => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM ejercicios WHERE id = ?", [id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

/** 
*update:
*@param {string} titulo
*@param {string} duracion -(hh:mm:ss)
*@param {number}repeticiones - entero <=127
*/
const updateById = ({ titulo, duracion,repeticiones }, id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE ejercicios SET titulo=?,duracion=?,repeticiones=? WHERE id=?",
      [titulo, duracion,repeticiones, id],
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


