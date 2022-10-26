const { Router } = require('express');
const { Country, Activity } = require('../db')
const countries = require ('./countries.js')
const activities = require ('./activities.js')

const router = Router();

router.use('/countries', countries);
router.use('/activities', activities);

module.exports = router;
