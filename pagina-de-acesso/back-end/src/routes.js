const express = require('express');
const routes = express.Router();

const CadastroController = require('./controllers/CadastroController');

// Rotas para o cadastro
routes.post('/cadastro', CadastroController.create);
routes.get('/cadastro', CadastroController.read);
routes.delete('/cadastro/:numero_de_cadastro', CadastroController.delete);

module.exports = routes;
