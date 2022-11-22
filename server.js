const express = require('express')
const mongoose = require('mongoose')
const { engine } = require('express-handlebars')

// Configuraciones

require('dotenv').config()
const app = express()

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
))

app.set('view engine', 'hbs')

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))


const start = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGO_ATLAS)
        console.log(`Base de datos conectada`);
        app.listen(process.env.PORT)
        console.log(`Todo ok en el puerto: ${process.env.PORT}`)
    } catch (err) {
        console.log(`Tuvimos un problema: \n ${ err }`);
    }
    
}

start()

/* --------------------------------- */
// Rutas

app.get('/', (req, res) => {
    /* res.send('Landing page (PUBLICO)') */
    res.render('index')
})

app.use('/blog', require('./routes/blog.routes'))
app.use('/oportunidades', require('./routes/oportunidades.routes'))
app.use('/registro', require('./routes/registro.routes'))


