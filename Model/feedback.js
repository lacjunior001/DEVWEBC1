const Sequelize = require('sequelize');
const database = require('../db/db')
const Pessoa = require('./pessoa')

const Feedback = database.define('feedback',
    {
        titulo:
        {
            type: Sequelize.STRING,
        },
        texto:
        {
            type: Sequelize.STRING
        },
        nivel:
        {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });

Pessoa.hasOne(Feedback);
module.exports = Feedback