require('@babel/register');
require('dotenv').config();

const express = require('express');
const { sequelize } = require('./db/models');

const configApp = require('./config/serverConfig');

const cardRouter = require('./routes/render/cards');
const cardApiRouter = require('./routes/api/cards');
const editProfile = require('./routes/render/editProfile');
const profile = require('./routes/render/profile');
const registrationRouter = require('./routes/render/RegistrationRouter');
const loginRouter = require('./routes/render/LoginRouter');
const editProfileApi = require('./routes/api/editProfileApi');
const orderRouter = require('./routes/render/orderRouter');

const app = express();

const PORT = process.env.PORT || 3000;

configApp(app);

app.use('/', cardRouter);
app.use('/api', cardApiRouter);
app.use('/login', loginRouter);
app.use('/profile', profile);
app.use('/edit', editProfile);
app.use('/registration', registrationRouter);
app.use('/api', editProfileApi);
app.use('/', orderRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on port ${PORT}`);
  } catch (e) {
    console.log(`DB issues! ${e.message}.`);
  }
});
