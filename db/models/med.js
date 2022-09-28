"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Med extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
