const express = require('express')
const {v4 : uuidv4} = require('uuid')
const { crearOportunidad, guardarOportunidad, oportunidades } = require('../controllers/oportunidades.controllers')
const routerOpor = express.Router()

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/imgOport')
    },
    filename: (req, file, cb) => {
        cb(null, `${uuidv4()}.${file.mimetype.split('/')[1]}`)
    }
})

const storageOport = multer({ sotrage: storage })



// Rutas de oportunidades

routerOpor.get('/', oportunidades)

routerOpor.get('/gestion', (req, res) => {
    res.send('Gestion de oportunidades, donde se puede modificar agregar o borrar oportunidades (PRIVADO)')
})

/* ------ Crear oportunidad ------ */

routerOpor.get('/create',crearOportunidad )

routerOpor.post('/', storageOport.single('img') , guardarOportunidad)

/* ------ Editar oportunidad ------ */

routerOpor.get('/edit', (req, res) => {
    res.send('Muestra el formulario para editar una oportunidad (PRIVADO)')
})

routerOpor.put('/:id', (req, res) => {
    res.send('Guarda los cambios de la oportunidad editada (PRIVADO)')
})

/* ------ Borrar oportunidad ------ */

routerOpor.delete('/:id', (req, res) => {
    res.send('Borra una oportunidad de la base de datos(PRIVADO)')
})

module.exports = routerOpor