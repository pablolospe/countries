const { Router } = require('express');
const { Association } = require('sequelize');
const { getActivity } = require('../controllers/controller');
const { Country, Activity } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { name } = req.query;
    let allActivities = await getActivity();
    if (name) {
      let selectedActivity = await allActivities.filter((a) =>
        a.name.toLowerCase().includes(name.toLowerCase())
      );
      selectedActivity.length
        ? res.status(200).send(selectedActivity)
        : res.status(404).send('Country not found');
    } else {
      res.status(200).send(allActivities);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    let { name, difficulty, duration, season, countries } = req.body;
    if (!name || !countries || !difficulty || !duration || !season)
      return res.status(400).json('Missing inputs');

    if (difficulty < 1 || difficulty > 5) {
      res.status(400).json('Difficulty must be from 1 to 5');
    } else {
      let newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countries,
      });
      const countries_activities = await Country.findAll({
        where: {
          name: countries,
        },
      });
      newActivity.addCountry(countries_activities);
      res.status(200).json(newActivity);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const activityToDelete = await Activity.findByPk(id);
    await activityToDelete.destroy();
    res.status(200).send(activityToDelete);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
