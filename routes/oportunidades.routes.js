const express = require('express')
const {v4 : uuidv4} = require('uuid')
const { crearOportunidad, guardarOportunidad, oportunidades, gestionOportunidades, borrarOportunidad, editarOportunidad, guardarCambiosOportunidad } = require('../controllers/oportunidades.controllers')
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

routerOpor.get('/gestion', gestionOportunidades)

/* ------ Crear oportunidad ------ */

routerOpor.get('/create',crearOportunidad )

routerOpor.post('/', storageOport.single('img') , guardarOportunidad)

/* ------ Editar oportunidad ------ */

routerOpor.get('/edit/:id', editarOportunidad)

routerOpor.put('/:id', guardarCambiosOportunidad)

/* ------ Borrar oportunidad ------ */

routerOpor.delete('/:id', borrarOportunidad)

module.exports = routerOpor