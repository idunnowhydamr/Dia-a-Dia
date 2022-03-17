import {Sequelize} from 'sequelize'

const db = new Sequelize('dia-a-dia', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

export default db