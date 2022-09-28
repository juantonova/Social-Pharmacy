const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Med }) {
      Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.hasMany(Med, { foreignKey: 'med_id' });
    }
  }
  Order.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      med_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Meds',
          key: 'id',
        },
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
