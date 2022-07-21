import {Sequelize} from 'sequelize-oracle';

const db = new Sequelize('dia-a-dia', 'C#DORTIZLO', '12345', {
    host:'localhost:1521',
    dialect: 'mysql'
})


export default db