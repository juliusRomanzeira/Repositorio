const Cadastro = require('../models/CadastroData');
const { read } = require('./CadastroController');
const { update } = require('./ContentController');

module.exports = {

    async read(request, response) {
        const priority = request.query;
        const prioritiCadastro = await Cadastro.find(priority); 
        
        return response.json(prioritiCadastro);
    },

    async update(request, response) {
        const { id } = request.params;
        
        const cadastro = await Cadastro.findOne({_id : id});

        if (cadastro.priority) {
            cadastro.priority = false;
        }else {
            cadastro.priority = true;
        }
        await cadastro.save(cadastro);
        return response.json(cadastro);
    }
    

}