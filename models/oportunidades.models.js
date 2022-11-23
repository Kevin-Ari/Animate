const mongoose = require('mongoose')

/* --- ESQUEMA DE LAS OPORTUNIDADES --- */



const oportunidadSchema = mongoose.Schema({
    img: String,
    empresa: { type: String, required: true },
    descripcion: { type: String, required: true },
    link: { type: String, required: true },
    fAlta: { type: String, required: true }, // fecha de alta
    fCierre: { type: String, required: true }, // fecha de cierre
    
})

module.exports = mongoose.model('oportunidades', oportunidadSchema)