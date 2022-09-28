const router = require("express").Router();

const Profile = require("../../views/Profile");

router.get("/", async (req, res) => {
  // const { userId } = req.session;
  // // const user = await User.finOne({ id: userId });

  res.renderComponent(Profile, {
    user: res.locals.user.id,
  });
});

module.exports = router;
