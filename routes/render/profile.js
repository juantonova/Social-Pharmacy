const router = require("express").Router();
const { User } = require("../../db/models");

const Profile = require("../../views/Profile");

// router.get("/", async (req, res) => {
//   const { user_id } = req.session;
//   // const user = await User.findOne({ where: { id: user_id } });
//   if (user_id) {
//     res.renderComponent(Profile, {
//       user: res.locals.user,
//     });
//   }
//   // const { userId } = req.session;
// });

// отрисовка из базы, без сессии,
// router.get("/", async (req, res) => {
//   const user = await User.findOne();

//   res.renderComponent(Profile, {
//     user,
//   });
// });

// отрисовка из базы, без сессии, по id
router.get("/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  res.renderComponent(Profile, {
    user,
  });
});

// router.get("/:id").get(async (req, res) => {
//   let user = "";
//   if (req.session.userId) {
//     user = await User.findOne({ where: { id: req.session.userId } });
//   }
//   res.renderComponent(Profile, { user });
// });

module.exports = router;
