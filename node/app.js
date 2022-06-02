import express from "express"
import cors from 'cors'
//Importamos la conexion a la DB
import db from "./database/db.js"
//Importamos nuestro enrutador
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use(cors()) //Dar permisos para usar la api
app.use(express.json()) //Admite formato json

//Rutas
app.use(userRoutes)

//Autenticar conexion a la bd (Sequelize)
try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

//Probar conexion
app.get('/', (req,res) => {
    res.send('Hola Word')

 })

app.listen( 8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})