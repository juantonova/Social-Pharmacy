const router = require('express').Router();

const CardsList = require('../../views/CardList');
const { Med } = require('../../db/models');

router.get('/', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  const { user } = res.locals;
  res.renderComponent(CardsList, { meds, user });
});

router.get('/up', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  meds.sort((a, b) => a.price - b.price);
  res.renderComponent(CardsList, { meds });
});

router.get('/down', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  meds.sort((a, b) => b.price - a.price);
  res.renderComponent(CardsList, { meds });
});

module.exports = router;
