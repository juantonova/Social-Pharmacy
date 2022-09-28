const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Med extends Model {
    static associate({ Order }) {
      Med.belongsTo(Order, { foreignKey: "med_id" });
    }
  }
  Med.init(
    {
      title: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      img: {
        type: DataTypes.TEXT,
      },
      inStock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Med",
    }
  );
  return Med;
};
