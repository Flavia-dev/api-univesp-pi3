const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    modalidade: {
        type: String,
        required: true,
    },
    nivel: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    salario: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model('Anuncios', schema);

