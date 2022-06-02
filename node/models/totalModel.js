//Importamos la conexon a la DB
import db from "../database/db.js";

//Iniciamos sequelize
import { DataTypes } from "sequelize";

const totalModel = db.define('total', {
    total: { type: DataTypes.DOUBLE },
})

export default totalModel;