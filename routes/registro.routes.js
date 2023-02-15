const express = require('express')
const { createUsuario, mostrarForm } = require('../controllers/registro.controllers')
const routerRegistro = express.Router()



// Rutas de registro

routerRegistro.get('/', mostrarForm)

routerRegistro.post('/', createUsuario)

module.exports = routerRegistro