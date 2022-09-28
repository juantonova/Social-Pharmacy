const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const Login = require('../../views/Login');

router.get('/', (req, res) => {
  res.renderComponent(Login);
});

router.post('/', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({
      where: { name },
    });
    if (!user) {
      res.json({ status: 'error', message: 'Такого пользователя не существует' });
      return;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.json({ status: 'error', message: 'Такой пары пользователь-пароль не существует' });
      return;
    }
    req.session.user_id = user.id;
    res.json({ status: true });
  } catch (error) {
    res.json({ status: false });
  }
});

module.exports = router;
