const router = require('express').Router();
const { Med, Order } = require('../../db/models');

router.get('/cards/:id', async (req, res) => {
  const { id } = req.params;
  const med = await Med.findOne({ where: { id } });
  if (med.inStock > 0) {
    med.inStock -= 1;
    await med.save();
    // доделать логику с юзером (чтобы цеплялся из сессии!!!)
    await Order.create({ user_id: 1, med_id: med.id, status: 'В корзине' });
    return res.json({ basket: true });
  }
  return res.status(404).json({ basket: false });
});

module.exports = router;
