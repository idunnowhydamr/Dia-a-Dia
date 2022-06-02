import {Sequelize} from 'sequelize';

const db = new Sequelize('dia_a_dia', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})


export default db