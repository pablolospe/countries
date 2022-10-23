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
            region: el.region,
            subregion: el.subregion,
            area: el.area,
            population: el.population,
        }
    })
    // console.log(apiInfo);
    return apiInfo;
};

const saveCountriesToDb = async function () {
    const data = await getApiInfo();
    const db_countries = await Country.bulkCreate(data);
    return db_countries
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


// const createActivity = async (body) => {
//     const { name, difficulty, duration, season, pais } = body;
//     // if ((!name, !hp, !type)) throw new Error('Faltan datos');
//     let newActiv = await Activity.create({
//         name,
//         difficulty,
//         duration,
//         season,
//         pais,
//     });
//     const paises = await Country.findAll({
//         where: {
//             name: pais,
//         },
//     });
//     //paises ---> paises de la db
//     newActiv.addCountry(paises);
//     // return Activity.findAll();
//     return 'holisss'
// };




module.exports = { getApiInfo, saveCountriesToDb, getInfoDB, getActivity }