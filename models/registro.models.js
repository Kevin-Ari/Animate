const mongoose = require('mongoose')

/* --- ESQUEMA DE LOS USUARIOS --- */



const usuarioSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    empresa: { type: String, required: true },
    contra: { type: String, required: true }
})

/* MODELO: Defino la colección y le confirmo como van a tener que ser los documentos  */

module.exports = mongoose.model('usuario', usuarioSchema)

