const express = require('express')
const routerBlog = express.Router()

// Rutas de blog

routerBlog.get('/', (req, res) => {
    /* res.send('Blog de noticias (PUBLICO)') */
    res.render('blog/index')
})

routerBlog.get('/gestion', (req, res) => {
    /* res.send('Gestion de blog, donde se puede modificar agregar o borrar noticias (PRIVADO)') */
    res.render('blog/gestion')
})

/* ------ Crear noticia ------ */

routerBlog.get('/create', (req, res) => {
    /* res.send('Muestra el formulario para crear nuevas noticias (PRIVADO)') */
    res.render('blog/create')
})

routerBlog.post('/', (req, res) => {
    res.send('Guarda las nuevas noticias en la base de datos (PRIVADO)')
})

/* ------ Editar noticia ------ */

routerBlog.get('/edit', (req, res) => {
    /* res.send('Muestra el formulario para editar noticias (PRIVADO)') */
    res.render('blog/edit')
})

routerBlog.put('/:id', (req, res) => {
    res.send('Guarda los cambios de la noticia editada (PRIVADO)')
})

/* ------ Borrar noticia ------ */

routerBlog.delete('/:id', (req, res) => {
    res.send('Borra una noticia de la base de datos (PRIVADO)')
})

module.exports = routerBlog