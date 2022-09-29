const router = require('express').Router();

const CardsList = require('../../views/CardList');
const { Med } = require('../../db/models');

router.get('/', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  const freeMeds = await meds.slice(0, 3);
  const freeMedsId = freeMeds.map((med) => med.id);
  const { user } = res.locals;
  const fmeds = meds.filter((med) => !freeMedsId.includes(med.id));
  res.renderComponent(CardsList, { fmeds, user, freeMeds });
});

router.get('/up', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  const freeMeds = await meds.slice(0, 3);
  const freeMedsId = freeMeds.map((med) => med.id);
  const { user } = res.locals;
  const fmeds = meds.filter((med) => !freeMedsId.includes(med.id));
  fmeds.sort((a, b) => a.price - b.price);
  res.renderComponent(CardsList, { fmeds, user, freeMeds });
});

router.get('/down', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  const freeMeds = await meds.slice(0, 3);
  const freeMedsId = freeMeds.map((med) => med.id);
  const { user } = res.locals;
  const fmeds = meds.filter((med) => !freeMedsId.includes(med.id));
  fmeds.sort((a, b) => b.price - a.price);
  res.renderComponent(CardsList, { fmeds, user, freeMeds });
});

module.exports = router;
