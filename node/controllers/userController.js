//Importamos la conexon a la DB
import sequelize from "../database/db.js";

//Importamos el modelo de usuario
import userModel from "../models/userModel.js";
import activeModel from "../models/activeModel.js";
import objetiveModel from "../models/objetiveModel.js";

//Importamos para encriptar las contraseñas
import bcrypt from "bcrypt";

//** Metodos**/

//Eliminar objetivo
export const deleteEvent = async (req,res) => {
  //Se elimina
  try {
    await objetiveModel.destroy({
      where:{
        id: req.params.idEvento
      }
    })
    res.json({ msg: "Eliminado correctamente." }); 
  
  } catch (error) {
    res.status(500).json(error);
  }
  }

//Guardar objetivos
export const addEvent = async (req,res) => {
//Se recibe la informacion del frontend
const {objetive,date, IdActivo} = req.body;
try {
  await objetiveModel.create({
    objetivo: objetive,
    fecha: date,
    activoId: IdActivo
  });
  res.json({ msg: "Guardado Correctamente." }); 
} catch (error) {
  res.status(404).json({ msg: "No se pudo guardar." });
}
}

//Eliminar activo
export const deleteActive = async (req,res) => {
//Se elimina
try {
  await activeModel.destroy({
    where:{
      id: req.params.idActivo
    }
  })
  res.json({ msg: "Eliminado correctamente." }); 

} catch (error) {
  res.status(500).json(error);
}
}

export const addActive = async (req, res) => {
  //Se recibe la informacion del frontend
  const {nombreActivo, valorActivo, idAccion, idUsuario} = req.body;
  
  //Se guarda el activo
  try {
    await activeModel.create({
      nombre: nombreActivo,
      valor: valorActivo,
      accionId: idAccion,
      usuarioId: idUsuario
    });
    res.json({ msg: "Guardado correctamente." });
  } catch (error) {
    res.status(404).json({ msg: "No se pudo guardar." });
  }
}


//Metodo para hacer inner join de las tablas objetivos y activos
export const getObjetives = async (req, res) => {
  try {
    const objetive = await sequelize.query(
      `SELECT objetivos.id, objetivos.objetivo, objetivos.fecha AS 'start', activos.nombre AS 'title', acciones.accion FROM objetivos INNER JOIN activos ON objetivos.activoId = activos.id INNER JOIN usuarios ON activos.usuarioId = usuarios.id INNER JOIN acciones ON activos.accionId = acciones.id WHERE usuarios.id= ${req.params.userId}`,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.json(objetive)
  } catch (error) {
    console.log(error);
  }
};


//Metodo para hacer inner join de las tablas usuarios y activos
export const getActives = async (req, res) => {
  try {
    //Asociacion de las tablas (uno a muchos)
    userModel.hasMany(activeModel);

    //Relacion de asociacion (clave externa) existe en el modelo de origien
    activeModel.belongsTo(userModel);

    //Se hace la busqueda del usuario con sequelize
    const users = await activeModel.findAll({

        //El include se le ingresa un array para que solo trabaje sobre los atributos de la tabla seleccionada(Usuarios)
      include: [
        {
          model: userModel, //De forma predeterminada, la opción de include hará que Sequelize genere una consulta SQL con la cláusula LEFT OUTER JOIN
          required: true, //Para cambiar LEFT OUTER JOIN A INNER JOIN se pone required: true
          where: { id: req.params.userId },
          attributes:[]
        }
      ],
      attributes:['id', ['nombre', 'title'], 'valor', 'updatedAt'] //nombre AS title
    });

    res.json(users);
  } catch (error) {
    res.status(404).json({ msg: "Error" });
  }
};

export const Login = async (req, res) => {
  try {
    //Se hace la busqueda del usuario con sequelize
    const user = await userModel.findAll({
      where: {
        usuario: req.body.user,
      },
    });
    //Se compara la contraseña enviada del frontend y la existente en la bd
    const match = await bcrypt.compare(req.body.password, user[0].contrasena);
    if (!match) return res.status(400).json({ msg: "Contraseña Erronea" });

    res.json(user);
  } catch (error) {
    res.status(404).json({ msg: "Usuario no encontrado" });
  }
};


export const Register = async (req, res) => {
  //Se recibe la informaciond del frontend
  const {
    usuario,
    nombre1,
    nombre2,
    apellido1,
    apellido2,
    email,
    password,
    password2,
  } = req.body;

  //Se comparan las contraseñas enviadas por el frontend
  if (password !== password2)
    return res
      .status(400)
      .json({ msg: "Contraseña y confirmar contraseña son incorrectos." });

  //Se modifica la contraseña enviada
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  //Se crea el usuario en la bd.
  try {
    await userModel.create({
      primer_nombre: nombre1,
      segundo_nombre: nombre2,
      primer_apellido: apellido1,
      segundo_apellido: apellido2,
      correo: email,
      contrasena: hashPassword,
      usuario: usuario,
    });
    res.json({ msg: "Registrado correctamente." });
  } catch (error) {
    console.log(error);
  }
};
