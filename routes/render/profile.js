const router = require("express").Router();
const { User } = require("../../db/models");

const Profile = require("../../views/Profile");

router.get("/", async (req, res) => {
  const { user_id } = req.session;
  const user = await User.findOne({ where: { id: user_id } });
  if (user_id === user.id) {
    console.log(user_id);
    res.renderComponent(Profile, {
      user,
    });
  }
  // const { userId } = req.session;
});

module.exports = router;
