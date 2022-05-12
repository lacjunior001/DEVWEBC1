let router = require('express').Router();
const setorController = require('../Controllers/setor');

router.post('/setor', setorController.adicionarSetor);

router.get('/setor', setorController.listarSetores);
/*
router.get('/:id', setorController.listarAlunoPorID);

router.put('/:id', setorController.atualizarAluno);

router.delete('/:id', setorController.removerAluno);
*/
module.exports = router;