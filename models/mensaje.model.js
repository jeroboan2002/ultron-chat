const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
    nombre: String,
    texto: String
}, {
    timestamps: true
});

module.exports = mongoose.model('mensaje', mensajeSchema);