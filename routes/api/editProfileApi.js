const router = require('express').Router();
const { User } = require('../../db/models');

// роутер на изменение профиля
// PUT /api/edit/:id
router.route('/edit/:id').put(async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findOne({ where: { id: req.params.id } });
  user.name = name;
  user.email = email;
  user.save();
  res.json({ updated: true, id: user.id });
});

// DELETE /api/edit/:id
router.route('/edit/:id').delete((req, res) => {
  const { id } = req.params;
  console.log(req.params.id);
  User.destroy({ where: { id } }).then((deletedUser) => (deletedUser ? res.json({ deleted: true }) : res.json({ deleted: false })));
  // req.session.destroy((error) => {
  //   if (error) {
  //     return res.status(500).json({ message: 'Session delete error' });
  //   }
  //   res.clearCookie('user_sid').redirect('/');
  // });
});

module.exports = router;
