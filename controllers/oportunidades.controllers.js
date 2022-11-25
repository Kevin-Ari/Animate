const modeloOportunidad = require("../models/oportunidades.models");



const oportunidades = async (req, res) => {
    /* res.send('Muestra las oportunidades (PUBLICO)') */
    try {
        const allOpportunities = await modeloOportunidad.find({}).lean()

        res.status(200).render('oportunidades/index', { allOpportunities })
        
    } catch (error) {
        
    }
    
}

const crearOportunidad = (req, res) => {
    /* res.send('Formulario para agregar nuevas oportunidades (PRIVADO)') */
    res.render('oportunidades/create')
}

const guardarOportunidad = async (req, res) => {
    /* res.send("Guarda las nuevas oportunidades en la base de datos (PRIVADO)"); */
    console.log(req.body);
    try {
        console.log(req.body.img);
        const nuevaOportunidad = new modeloOportunidad(req.body);
        await nuevaOportunidad.save();
        res.redirect("/oportunidades/");
    } catch (error) {
        console.log(`Hubo un fallo en la carga de una nueva oportunidad ${error}`);
        res.status(500).json({
            msg: "Algo fallo en el servidor",
            error: true,
        });
    }
};

module.exports = {
    oportunidades,
    crearOportunidad,
    guardarOportunidad,
};
