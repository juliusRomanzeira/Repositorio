const Cadastro = require('../models/CadastroData');

module.exports = {

    async create(request, response) {
        const{ nome, senha, idContrato, priority } = request.body;

        if (!nome || !senha || !idContrato) {
            return response.status(400).json({ error: 'Preencha todos os campos' });
        }

        const cadastroCreated = await Cadastro.create({
            nome,
            senha,
            idContrato,
            priority
        });
    },


    async read(request, response) {
        const cadastroList = await Cadastro.find();
        
        return response.json(cadastroList);

    },

    async delete(request, response) {
        const {numero_de_cadastro} = request.params;
        const cadastroDeleted = await Cadastro.findOneAndDelete({ _id : numero_de_cadastro });
        if (!cadastroDeleted) {
            return response.status(404).json({ error: 'Cadastro não encontrado' });
        }
    }
}