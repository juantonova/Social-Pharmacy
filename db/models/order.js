const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
      },
      med_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
