const FeedbackModel = require('../model/feedback');
const PessoaModel = require('../model/pessoa');
const banco = require('../db/db');

exports.adicionarFeedBack = async (req, res) => {
    try {
        if (req.body.avaliador.setor.id == req.body.avaliado.setor.id) {
            const avaliador = await PessoaModel.findAll(
                {
                    where: {
                        id: req.avaliador.Id
                    }
                }
            );

            const avaliado = await PessoaModel.findAll(
                {
                    where: {
                        id: req.avaliado.Id
                    }
                }
            );

            if (avaliador.setor == avaliado.setor) {
                if (req.body.nivel >= 0 && req.body.nivel <= 5) {
                    const inserirFeedback = await FeedbackModel.create(
                        {
                            nome: req.body.nome,
                            descricao: req.body.descricao
                        }
                    )
                    res.send({
                        status: 201,
                        messsage: "Inserido com Sucesso",
                        inserirSetor: inserirFeedback
                    })
                }
                else {
                    res.send({
                        status: 403,
                        messsage: "Impossivel avaliar desta forma",
                        inserirSetor: inserirFeedback
                    })
                }
            }
            else
            {
                res.send({
                    status: 403,
                    messsage: "Não é possivel avaliar esta pessoa",
                    inserirSetor: inserirFeedback
                })
            }
        }
        else {
            res.send({
                status: 403,
                messsage: "Não é possivel avaliar esta pessoa",
                inserirSetor: inserirFeedback
            })
        }
    } catch (error) {
        console.log(error)
        res.send({
            status: 500,
            messsage: error
        })
    }
}

exports.listarAvaliacões = async (req, res) => {
    try {
        const feedbackList = await feedback.findAll(
            {
                where: {
                    Pessoa: req.Id
                }
            }
        );
        var totalSoma = 0
        feedbackList.forEach(element => {
            totalSoma = totalSoma + element.nivel
        });

        var totalMedia = totalSoma/feedbackList.length

        feedbackList.forEach(element => {
            if()
            {
                totalSoma = totalSoma + element.nivel
            }
            
        });
        res.json(setores)
    } catch (error) {
    }
}