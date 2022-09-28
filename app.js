require('@babel/register');
require('dotenv').config();

const express = require('express');
const { sequelize } = require('./db/models');

const configApp = require('./config/serverConfig');

const cardRouter = require('./routes/render/cards');
const loginRouter = require('./routes/render/LoginRouter');
const registrationRouter = require('./routes/render/RegistrationRouter');

const app = express();

const PORT = process.env.PORT || 3000;

configApp(app);

app.use('/', cardRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on port ${PORT}`);
  } catch (e) {
    console.log(`DB issues! ${e.message}.`);
  }
});
