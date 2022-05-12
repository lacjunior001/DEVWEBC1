const Sequelize = require('sequelize');
const database = require('../db/db')
const Setor = require('./setor')

const PessoaModel = database.define('pessoa',
    {
        nome:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        email:
        {
            type: Sequelize.STRING
        }
    });

Setor.hasOne(PessoaModel);

module.exports = PessoaModel