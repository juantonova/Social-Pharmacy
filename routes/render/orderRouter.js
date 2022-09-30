const router = require('express').Router();
const { Order, Med } = require('../../db/models');

const orderViews = require('../../views/Order');

router.get('/order', async (req, res) => {
  const { user } = res.locals;
  const orders = await Order.findAll({
    where: { user_id: user.id, status: 'В корзине' },
  });
  const meds = [];
  for (let i = 0; i < orders.length; i++) {
    const med = await Med.findOne({ where: { id: orders[i].med_id } });
    meds.push(med);
  }
  const total = meds.map((el) => el.price).reduce((x, y) => x + y, 0);
  const count = orders.map((el) => el.count);
  res.renderComponent(orderViews, {
    user,
    orders,
    meds,
    total,
    count,
  });
});

router.get('/add/order/:id', async (req, res) => {
  const { id } = req.params;
  const med = await Med.findOne({ where: { id } });
  if (med.inStock > 0) {
    med.inStock -= 1;
    await med.save();
    const user_id = res.locals.user.id;
    const order = await Order.findOne({ where: { med_id: med.id, user_id } });
    console.log(order);
    if (order) {
      order.count += 1;
      await order.save();
      return res.json({ basket: true, order: order.count });
    }
    return res.status(404).json({ basket: false, order: order.count });
  } else {
    return res.status(404).json({ basket: false });
  }
});

router.get('/remove/order/:id', async (req, res) => {
  const user_id = res.locals.user.id;
  const { id } = req.params;
  console.log(user_id, id);
  const order = await Order.findOne({ where: { user_id, med_id: id } });
  const med = await Med.findOne({ where: { id } });
  if (order.count > 0) {
    order.count -= 1;
    await order.save();
    med.inStock += 1;
    await med.save();
    return res.json({ basket: true, order: order.count });
  }
  return res.status(404).json({ basket: false, order: order.count });
});

module.exports = router;
