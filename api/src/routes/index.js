const { Router } = require('express');
const { Country, Activity } = require('../db')
const countries = require ('./countries.js')
const activities = require ('./activities.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.use('/countries', countries);
router.use('/activities', activities);



module.exports = router;

