const router = require('express').Router()
const verifyJWT = require('../services/verifyJWT');
const userController = require("../controllers/userController");
const organizadorController = require("../controllers/organizadorController");
const eventoController = require("../controllers/eventoController");
const ingressoController = require("../controllers/ingressoController");
const compraController = require("../controllers/compraController");

//Rotas Usuário
router.post('/user', userController.createUser);
router.get('/user', verifyJWT, userController.getAllUsers);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.post("/login", userController.loginUser);

//Rotas Organizador
router.post('/organizador', organizadorController.createOrganizador);
router.get('/organizador', organizadorController.getAllOrganizador);
router.put('/organizador', organizadorController.updateOrganizador);
router.delete('/organizador/:id', organizadorController.deleteOrganizador);

//Rotas Evento
router.post('/evento', eventoController.createEvento);
router.get('/evento',verifyJWT, eventoController.getAllEventos);
router.put('/evento', eventoController.updateEvento);
router.delete('/evento/:id', eventoController.deleteEvento);
router.get('/evento/data', eventoController.getEventosPorData);
router.get('/evento/:data_hora', verifyJWT, eventoController.getEventosDias);

//Rotas Ingresso
router.post('/ingresso', ingressoController.createIngresso);
router.get('/ingresso', ingressoController.getAllIngresso);
router.put('/ingresso', ingressoController.updateIngresso);
router.delete('/ingresso/:id', ingressoController.deleteIngresso);
router.get("/ingresso/evento/:id_evento", ingressoController.getByIdEvento);

//Rotas Compra
router.post('/comprasimples', compraController.registrarCompraSimples);
router.post('/compra', compraController.registrarCompra);



// http://localhost:5000/api/v1/

module.exports = router