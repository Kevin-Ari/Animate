const usuarioModel = require('../models/registro.models')


const mostrarForm = (req, res) => {
    /* res.send('Registro de usuarios (PUBLICO)') */
    res.render('registro/index', { title: ' | Registro' })
}

const createUsuario = async (req, res) => {
    /* res.send('Va a guardar los datos del usuario registrado')*/
    /* console.log(req.body);  */

    try {
        const nuevoUsuario = new usuarioModel(req.body)
        /* await nuevoUsuario.save() */
        res.render('registro/bienvenido' ,{ mensaje: `Felicidades ${req.body.nombre}, por haberte registrado en animate !`})
    } catch (error) {
        res.render('registro/bienvenido', { mensaje: `Ocurrio un error al cargar al usuario ${error}`})
    }
}

module.exports = {
    mostrarForm,
    createUsuario
}