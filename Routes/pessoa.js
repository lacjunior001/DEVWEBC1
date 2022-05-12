let router = require('express').Router();
const pessoaController = require('../Controllers/pessoa');

router.post('/pessoa', pessoaController.adicionarPessoa);
/*
router.get('/setor', setorController.listarSetores);

router.get('/:id', setorController.listarAlunoPorID);

router.put('/:id', setorController.atualizarAluno);

router.delete('/:id', setorController.removerAluno);
*/
module.exports = router;