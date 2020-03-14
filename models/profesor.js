const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM profesores", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

const getById = (id)=>{
  return new Promise((resolve,reject)=>{
    db.query("SELECT * FROM profesores where id = ?",[id],
    (err,rows)=>{
      if(err) reject(err);
      resolve(rows);
    })
  })

}


const create=({nombre,experiencia})=>{
    return new Promise((resolve,reject)=>{
        db.query("INSERT INTO profesores (nombre,experiencia) VALUES (?,?)",[nombre,experiencia],(err,result)=>{
            if(err) reject(err);
            resolve(result)
        });
    });
};

module.exports = {
  getAll: getAll,
  getById:getById,
  create:create,
};

/*recuperar, crear, editar y borrar los datos 
tablas clientes, ejercicios y profesores.Para la creación de datos dentro de la tabla clientes se debe tener en cuenta que todos los campos,excepto la fecha de creación son obligatorios y además el DNI debe tener un formato válido.Para realizar la edición de un registro de cualquiera de las tablas se deben pasar a través del cuerpo de lapetición todos los datos a editar y además el ID del registro a editar.Se valorará la modularización de las diferentes acciones */