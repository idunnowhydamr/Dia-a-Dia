//Importamos la conexon a la DB
import db from "../database/db.js";

//Iniciamos sequelize
import { DataTypes } from "sequelize";

const userModel = db.define('usuario', {
    primer_nombre: { type: DataTypes.STRING },
    segundo_nombre: { type: DataTypes.STRING },
    primer_apellido: { type: DataTypes.STRING },
    segundo_apellido: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    contrasena: { type: DataTypes.STRING },
    usuario: { type: DataTypes.STRING }
})

export default userModel
