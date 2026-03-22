'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
          orderTable.associate = (models) => {
  orderTable.belongsTo(models.staffTable, {
    foreignKey: "staffId",
    as: "staff"
  });
};
    }
  }
  orderTable.init({
    orderId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    orderType: DataTypes.STRING,
    images: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    status: DataTypes.ENUM('pending', 'processing', 'completed'),
    staffName: DataTypes.STRING,
    staffId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'orderTable',
  });
  return orderTable;
};