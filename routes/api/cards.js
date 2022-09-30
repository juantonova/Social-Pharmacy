const router = require('express').Router();
const { Med, Order } = require('../../db/models');

router.get('/cards/:id', async (req, res) => {
  const { id } = req.params;
  const med = await Med.findOne({ where: { id } });
  if (med.inStock > 0) {
    med.inStock -= 1;
    await med.save();
    const user_id = res.locals.user.id;
    await Order.create({ user_id, med_id: med.id, status: 'В корзине' });
    return res.json({ basket: true, inStock: med.inStock });
  }
  return res.status(404).json({ basket: false, inStock: med.inStock });
});

router.post('/addform', async (req, res) => {
  try {
    const {
      title, price, url, inStock,
    } = req.body;
    const med = await Med.findOne({ where: { title } });
    if (med) {
      return res.status(404).json({ message: 'Такой товар уже существует!', status: false });
    }
    await Med.create({
      title, price, img: url, inStock,
    });
    return res.json({ url: '/', status: true });
  } catch (err) {
    return res.status(500).json({ message: err.message, status: false });
  }
});

module.exports = router;
