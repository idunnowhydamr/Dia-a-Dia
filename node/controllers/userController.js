//Importamos el modelo de usuario
import userModel from "../models/userModel.js";


//** Metodos para el CRUD **/

//Mostrar todos los registros
export const getAllUsers = async (req, res) => {
    try {
      const users = await userModel.findAll()
      res.json(users)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getUser = async (req,res) => {
    try {
        const user = await userModel.findAll({
           where:{ id :req.params.id } 
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Crear un registro
export const createUser = async (req, res) => {
    try {
        await userModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateUser = async (req, res) => {
    try {
        await userModel.update(req.body, {
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
} 
//Eliminar un registro
export const deleteUser = async (req, res) => {
    try {
        await userModel.destroy({
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}