const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/feedback.sqlite'
})

module.exports = sequelize;
