const router = require("express").Router();

const CardsList = require("../../views/CardList");
const { Med } = require("../../db/models");

router.get("/", async (req, res) => {
  const meds = await Med.findAll({ raw: true });
  res.renderComponent(CardsList, { meds });
});

module.exports = router;
