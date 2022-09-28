const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order }) {
      // eslint-disable-next-line camelcase
      User.hasMany(Order, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.TEXT,
      },
      password: {
        type: DataTypes.INTEGER,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
