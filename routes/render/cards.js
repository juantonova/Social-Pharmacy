const router = require('express').Router();

const CardsList = require('../../views/CardList');

router.get('/', (req, res) => {
  res.renderComponent(CardsList);
});

module.exports = router;
