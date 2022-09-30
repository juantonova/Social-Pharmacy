const router = require('express').Router();
const { Med, Order } = require('../../db/models');

router.get('/cards/:id', async (req, res) => {
  const { id } = req.params;
  const med = await Med.findOne({ where: { id } });
  if (med.inStock > 0) {
    med.inStock -= 1;
    await med.save();
    const user_id = res.locals.user.id;
    const order = await Order.findOne({ where: { med_id: med.id, user_id, status: 'В корзине'} });
    if (order) {
      order.count += 1;
      await order.save();
      return res.json({ basket: true, inStock: med.inStock });
    }
    const or = await Order.create({
      user_id, med_id: med.id, status: 'В корзине', count: 1,
    });
    return res.json({ basket: true, inStock: med.inStock });
  }
  return res.status(404).json({ basket: false, inStock: med.inStock });
});

router.get('/free/cards/:id', async (req, res) => {
  const { id } = req.params;
  const med = await Med.findOne({ where: { id } });
  if (med.inStock > 0) {
    med.inStock -= 1;
    await med.save();
    const user_id = res.locals.user.id;
    const order = Order.findOne({ where: { med_id: med.id, user_id, status: 'В корзине' } });
    if (order) {
      med.price = 0;
      med.save();
      order.count += 1;
      await order.save();
      return res.json({ basket: true, inStock: med.inStock });
    }
    await Order.create({
      user_id, med_id: med.id, status: 'В корзине', count: 1,
    });
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

router.get('/ordermake', async (req, res) => {
  const { id } = res.locals.user;
  const order = await Order.findAll({ where: { user_id: id } }, { raw: true });
  order.forEach(async (med) => {
    med.status = 'Заказ оформлен';
    await med.save();
  });
  res.json({ status: 'Заказ оформлен!' });
});

module.exports = router;
