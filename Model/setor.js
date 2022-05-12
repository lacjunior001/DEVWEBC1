const Sequelize = require('sequelize');
const database = require('../db/db')

const SetorModel = database.define('setor',
    {
        nome:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao:
        {
            type: Sequelize.STRING
        },
    });

module.exports = SetorModel