//Importamos la conexon a la DB
import db from "../database/db.js";

//Iniciamos sequelize
import { DataTypes } from "sequelize";

const objetiveModel = db.define('objetivo', {
    objetive: { type: DataTypes.STRING },
    fecha: { type: DataTypes.DATE },
    activoId: { type: DataTypes.INTEGER}
})

export default objetiveModel;