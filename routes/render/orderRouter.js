const router = require('express').Router();
const { Order, Med } = require('../../db/models');

const orderViews = require('../../views/Order');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const orders = await Order.findAll({
    where: { user_id: user.id, status: 'В корзине' },
  });
  console.log(orders);
  const meds = [];
  for (let i = 0; i < orders.length; i++) {
    let med = await Med.findOne({ where: { id: orders[i].med_id } });
    meds.push(med);
  }

  res.renderComponent(orderViews, { user, orders, meds });
});

module.exports = router;
