const usuarioModel = require('../models/registro.models')


const mostrarForm = (req, res) => {
    /* res.send('Registro de usuarios (PUBLICO)') */
    res.render('registro/index', { title: ' | Registro' })
}

const createUsuario = async (req, res) => {
    res.send('Va a guardar los datos del usuario registrado')
    console.log(req.body);

    const nuevoUsuario = new usuarioModel(req.body)

    await nuevoUsuario.save()
}

module.exports = {
    mostrarForm,
    createUsuario
}