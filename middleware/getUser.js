const { User } = require('../db/models');

async function getUser(req, res, next) {
  if (req.session) {
    // console.log(req.session);
    const user = await User.findByPk((req.session.user_id));
    res.locals.user = user;
    // console.log(user);
  }
  next();
}

module.exports = getUser;
