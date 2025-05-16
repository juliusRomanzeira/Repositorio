const mongoose = require('mongoose');

const CadastroDataSchema = new mongoose.Schema({

    nome: String,
    senha: String,
    id: String,
});

module.exports = mongoose.model('CadastroData', CadastroDataSchema);