const router = require('express').Router();
const { User } = require('../../db/models');

// роутер на изменение профиля
router.route('/edit/:id').put(async (req, res) => {
  console.log('ya tut');
  const { name, email } = req.body;
  const user = await User.findOne({ where: { id: req.params.id } });
  user.name = name;
  user.email = email;
  user.save();
  res.json({ updated: true, id: user.id });
});

router.route('/:id').delete((req, res) => {
  const { id } = req.params;
  User.destroy({ where: { id } })
    .then((deletedUser) =>
      deletedUser ? res.json({ deleted: true, id }) : res.status(404).json({ deleted: false })
    )
    .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
