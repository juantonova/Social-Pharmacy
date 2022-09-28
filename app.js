const express = require("express");
const { sequelize } = require("./db/models");

const configApp = require("./config/serverConfig");

const app = express();

const PORT = process.env.PORT || 3000;

configApp(app);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on port ${PORT}`);
  } catch (e) {
    console.log(`DB issues! ${e.message}.`);
  }
});
