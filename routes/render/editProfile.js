const router = require("express").Router();

const editProfile = require("../../views/EditProfile");

router.get("/", (reg, res) => {
  res.renderComponent(editProfile);
});

module.exports = router;
