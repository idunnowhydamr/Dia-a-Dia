import express from "express"
import cors from 'cors'
//Importamos la conexion a la DB
import db from "./database/db.js"
//Importamos nuestro enrutador
import userRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/app', userRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.get('/', (req,res) => {
    res.send('Hola Word')
 })

app.listen( 8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})