'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipmentTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      equipmentTable.associate = (models) => {
  equipmentTable.belongsTo(models.organizationTable, {
    foreignKey: "organizationId",
    as: "organization"
  });
}; 
    }
  }
  equipmentTable.init({
    equipmentId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    equipmentName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    status: DataTypes.ENUM('good', 'bad', 'new'),
    images: DataTypes.JSON,
    organizationId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'equipmentTable',
  });
  return equipmentTable;
};