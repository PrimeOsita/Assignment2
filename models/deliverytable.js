'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deliveryTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
          deliveryTable.associate = (models) => {
  deliveryTable.belongsTo(models.staffTable, {
    foreignKey: "staffId",
    as: "staff"
  });
};
    }
  }
  deliveryTable.init({
    deliveryId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    processedBy: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'processing', 'delivered'),
    clothType: DataTypes.STRING,
    staffId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'deliveryTable',
  });
  return deliveryTable;
};