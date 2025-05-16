const Cadastro = require('../models/CadastroData');

module.exports = {

    async update(request, response) {
        const{ id } = request.params;
        const { nome, idContrato, priority } = request.body;

        const cadastro = await Cadastro.findOne({ _id : id});

        if (!cadastro) {
            return response.status(404).json({ error: 'Cadastro não encontrado' });
        } if (idContrato) {
            cadastro.idContrato = idContrato;
            await cadastro.save(cadastro);
        }
        if (nome) {
            cadastro.nome = nome;
            await cadastro.save(cadastro);
        }
        if (priority)
            cadastro.priority = priority;
            await cadastro.save(cadastro);
        return response.json(cadastro);
    }
}