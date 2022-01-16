const { Schema, model } = require('mongoose');


const ProductoSchema = Schema({
    producto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = model('Producto', ProductoSchema);