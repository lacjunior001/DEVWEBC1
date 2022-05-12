const PessoaModel = require('../model/pessoa');
const banco = require('../db/db');

exports.adicionarPessoa = async (req, res) => {
    try {
        console.log(req.body)
        const inserirPessoa = await PessoaModel.create(
            {
                nome: req.body.nome,
                email: req.body.email,
                setor: req.body.setor
            }
        )
        res.send({
            status: 201,
            messsage: "Inserido com Sucesso",
            inserirPessoa: inserirPessoa
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