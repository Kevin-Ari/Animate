const oportunidadesModels = require("../models/oportunidades.models");
const modeloOportunidad = require("../models/oportunidades.models");



const oportunidades = async (req, res) => {
    /* res.send('Muestra las oportunidades (PUBLICO)') */
    try {
        const allOpportunities = await modeloOportunidad.find({}).lean()

        res.status(200).render('oportunidades/index', { allOpportunities })

    } catch (error) {

    }

}

const gestionOportunidades = async (req, res) => {
    /* res.send('Gestion de oportunidades, donde se puede modificar agregar o borrar oportunidades (PRIVADO)') */
    try {
        const allOpportunities = await modeloOportunidad.find({}).lean()

        res.render('oportunidades/gestion', { allOpportunities })
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
        res.redirect("/oportunidades/gestion");
    } catch (error) {
        console.log(`Hubo un fallo en la carga de una nueva oportunidad ${error}`);
        res.status(500).json({
            msg: "Algo fallo en el servidor",
            error: true,
        });
    }
};

const editarOportunidad = async (req, res) => {
    /* res.send('Muestra el formulario para editar una oportunidad (PRIVADO)') */
    const { id } = req.params
    try {
        const oportunidad = await oportunidadesModels.findById(id).lean()
        res.status(200).render('oportunidades/edit', {
            oportunidad
        })
    } catch (error) {
        
    }
}

const guardarCambiosOportunidad = async (req, res) => {
    /* res.send('Guarda los cambios de la oportunidad editada (PRIVADO)') */

    try {
        const { id } = req.params

        const oportunidad = req.body
        console.log(id)
        console.log(oportunidad)

        await oportunidadesModels.updateOne({_id: id }, { $set: oportunidad })
        
        res.redirect('/oportunidades/gestion')
    } catch (error) {
        
    }
}

const borrarOportunidad = async (req, res) => {
    /* res.send('Borra una oportunidad de la base de datos(PRIVADO)') */
    try {
        await modeloOportunidad.findByIdAndDelete(req.params.id)

        res.redirect('/oportunidades/gestion')
    } catch (error) {
        
    }
}

module.exports = {
    oportunidades,
    gestionOportunidades,
    crearOportunidad,
    guardarOportunidad,
    editarOportunidad,
    guardarCambiosOportunidad,
    borrarOportunidad
};
