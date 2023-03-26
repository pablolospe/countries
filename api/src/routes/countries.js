const { Router } = require('express');
const { getInfoDB } = require('../controllers/controller');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        
        let allCountries = await getInfoDB();
        if (name) {
            const selectedCountry = await allCountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
            selectedCountry.length ?
            res.status(200).send(selectedCountry) :
            res.status(404).send('Country not found');
        } else {
            res.status(200).send(allCountries)
        }
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const countriesDb = await getInfoDB()
    try {
        if (id) {
            let countryId = await countriesDb.filter(c => c.id === id)

            countryId.length ?
                res.status(200).json(countryId) :
                res.status(400).send('Country not found')
        }
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
});

module.exports = router;