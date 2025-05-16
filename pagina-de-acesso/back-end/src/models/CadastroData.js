const mongoose = require('mongoose');

const CadastroDataSchema = new mongoose.Schema({

    nome: String,
    senha: String,
    idContrato: String,
    priority: Boolean
});

module.exports = mongoose.model('CadastroData', CadastroDataSchema);