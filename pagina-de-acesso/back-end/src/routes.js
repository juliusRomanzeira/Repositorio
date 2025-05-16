const express = require('express');
const routes = express.Router();

const CadastroController = require('./controllers/CadastroController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

// Rotas para o cadastro
routes.post('/cadastro', CadastroController.create);
routes.get('/cadastro', CadastroController.read);
routes.delete('/cadastro/:numero_de_cadastro', CadastroController.delete);


// Rota Priority
routes.get('/priority', PriorityController.read);
routes.post('/priority/:id', PriorityController.update);

// Rota Content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;
