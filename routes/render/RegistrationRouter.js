const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const Registration = require('../../views/Registration');

router.get('/', (req, res) => {
  res.renderComponent(Registration, { });
});

router.post('/', async (req, res) => {
  const {
    name, email, password, confirmPassword,
  } = req.body;
  try {
    const user = await User.findOne({ where: { email }, raw: true });
    // console.log(user);

    if (user) {
      res.json({ status: 'error', message: 'Пользователь с таким именем уже существует' });
      return;
    }
    if (password.length < 8) {
      res.json({ status: 'error', message: 'Длина пароля должна быть не меньше 8 символов!' });
      return;
    }
    if (password === confirmPassword) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name, email, password: hashedPassword,
      });
      req.session.user_id = newUser.id;
      res.status(200).json({ text: 'ok ' });
    } else {
      res.json({ status: 'error', message: 'Пароли не совпадают!' });
    }
  } catch (err) {
    res.json({ message: `${err.message}` });
  }
});

module.exports = router;
