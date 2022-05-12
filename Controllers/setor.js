const SetorModel = require('../model/setor');
const banco = require('../db/db');

exports.adicionarSetor = async (req, res) => {
    try {
        console.log(req.body)
        const inserirSetor = await SetorModel.create(
            {
                nome: req.body.nome,
                descricao: req.body.descricao
            }
        )
        res.send({
            status: 201,
            messsage: "Inserido com Sucesso",
            inserirSetor: inserirSetor
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 500,
            messsage: error
        })
    }
}

exports.listarSetores = async (req, res) => {
    try {
        const setores = await SetorModel.findAll();
        res.json(setores)
    } catch (error) {
    }
}