const router = require('express').Router();
const { User } = require('../../db/models');
const editProfile = require('../../views/EditProfile');

router.get('/:id', async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  res.renderComponent(editProfile, { user });
});

module.exports = router;
