const router = require("express").Router();
const { User } = require("../../db/models");

router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findOne({ where: { id: req.params.id } });
  user.name = name;
  user.email = email;
  user.save();
  res.json({ updated: true });
});

module.exports = router;
