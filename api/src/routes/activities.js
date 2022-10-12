const { Router } = require('express');
const { Country, Activity } = require('../db');
// const { createActivity } = require('../controllers/controller.js');

const router = Router();

// FLAG PARA QUE NO SE REPITA EL NOMBRE DE LA ACTIVIDAD, HACER UN IF EN EL POST
// const checkData = async (name) => {
//     const normalizedName = name.toLowerCase();
//     const bdData = await getDbData();
//     const bdFind = await bdData.find((data) => data.name.toLowerCase() === normalizedName);
//     return bdFind === undefined? true : false;
//   }

router.post('/', async (req, res) => {
    try {
        let { name, difficulty, duration, season, pais } = req.body;
        if (!name || !pais || !difficulty || !duration || !season) return res.status(400).json('Missing inputs') 
       
        if (difficulty < 1 || difficulty > 5) {
            res.status(400).json('Difficulty must be from 1 to 5')
        } else {
            let newActivity = await Activity.create({
                name,
                difficulty,
                duration,
                season,
                pais,
            });
            const countries_activities = await Country.findAll({
                where: {
                    name: pais,
                },
            });
            newActivity.addCountry(countries_activities);
            res.status(200).json(newActivity);
        }
    } catch (error) {
        res.status(400).send(error.message)
    }

    // Recibe los datos recolectados desde el formulario controlado de la ruta de 
    // creación de actividad turística por body
    // Crea una actividad turística en la base de datos, relacionada con los países correspondientes
})


module.exports = router;