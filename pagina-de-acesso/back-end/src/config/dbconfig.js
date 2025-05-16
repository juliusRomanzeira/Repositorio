const mongoose = require('mongoose');

const dbconfig = 'mongodb+srv://arco:arco@cluster0.kj0yg0n.mongodb.net/cadastro?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(dbconfig, {
    useNewURLParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
