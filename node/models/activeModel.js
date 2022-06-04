//Importamos la conexon a la DB
import db from "../database/db.js";

//Iniciamos sequelize
import { DataTypes } from "sequelize";

const activeModel = db.define('activo', {
    nombre: { type: DataTypes.STRING },
    valor: { type: DataTypes.DOUBLE },
    accionId: { type: DataTypes.INTEGER},
    usuarioId: { type: DataTypes.INTEGER }
})

export default activeModel;
