const axios = require('axios');
const { Country, Activity } = require('../db.js')

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.cca3,
            name: el.name.common,
            flag: el.flags[0],
            capital: el.capital ? el.capital[0] : 'No capital aviable',
            region: el.region ? el.region : 'No region aviable',
            subregion: el.subregion ? el.subregion : 'No subregion aviable',
            area: el.area,
            population: el.population,
        }
    })
    return apiInfo;
};

const saveCountriesToDb = async function () {
    const data = await getApiInfo();
    data.forEach(country => {
        Country.findOrCreate({
            where: {
                id: country.id,
                name: country.name,
                flag: country.flag,
                capital: country.capital,
                region: country.region,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        })
    })
}



const getInfoDB = async () => {
    const countries = await Country.findAll({
        attributes: [
            "id",
            "name",
            "flag",
            "capital",
            "region",
            "subregion",
            "area",
            "population",
        ],
        include: [
            {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
            },
        ],
    });
    return countries;
}

const getActivity = async () => {
    const activities = await Activity.findAll({
        attributes: ["id", "name", "difficulty", "duration", "season"],
        include: [
            {
                model: Country,
                attributes: [
                    "id",
                    "name",
                    "flag",
                    "capital",
                    "region",
                    "subregion",
                    "area",
                    "population",
                ],
            }
        ]
    })
    return activities;
}


module.exports = { getApiInfo, saveCountriesToDb, getInfoDB, getActivity }