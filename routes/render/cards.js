const router = require('express').Router();

const CardsList = require('../../views/CardList');
const { Med } = require('../../db/models');
const FormAddCard = require('../../views/FormAddCard');

router.get('/', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  meds.sort((a, b) => a.id - b.id);
  const freeMeds = await meds.slice(0, 3);
  freeMeds.forEach(async (med) => {
    const freeMed = await Med.findOne({ where: { id: med.id } });
    freeMed.price = 0;
    freeMed.save();
  });
  const { user } = res.locals;
  const fmeds = meds.filter((el) => el.price !== 0)
  res.renderComponent(CardsList, { fmeds, user, freeMeds });
});

router.get('/up', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  meds.sort((a, b) => a.id - b.id);
  const freeMeds = await meds.slice(0, 3);
  freeMeds.forEach(async (med) => {
    const freeMed = await Med.findOne({ where: { id: med.id } });
    freeMed.price = 0;
    freeMed.save();
  });
  const { user } = res.locals;
  const fmeds = meds.filter((el) => el.price !== 0)
  fmeds.sort((a, b) => a.price - b.price)
  res.renderComponent(CardsList, { fmeds, user, freeMeds });
});

router.get('/down', async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  meds.sort((a, b) => a.id - b.id);
  const freeMeds = await meds.slice(0, 3);
  freeMeds.forEach(async (med) => {
    const freeMed = await Med.findOne({ where: { id: med.id } });
    freeMed.price = 0;
    freeMed.save();
  });
  const { user } = res.locals;
  const fmeds = meds.filter((el) => el.price !== 0);
  fmeds.sort((a, b) => b.price - a.price);
  res.renderComponent(CardsList, { fmeds, user, freeMeds });
});

router.get('/addform', async (req, res) => {
  res.renderComponent(FormAddCard, { });
});

module.exports = router;
