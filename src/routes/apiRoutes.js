const router = require('express').Router();

const controllerCadastro = require("../controllers/controllerCadastro");

//Rotas Cadastro
router.post('/cadastro', controllerCadastro.createUser);
router.get('/cadastro', controllerCadastro.getAllUsers);
router.put('/cadastro', controllerCadastro.updateUser);
router.delete('/cadastro/:id', controllerCadastro.deleteUser);



module.exports = router;