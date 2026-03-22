'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organizationTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      organizationTable.associate = (models) => {
  organizationTable.hasMany(models.staffTable, {
    foreignKey: "organizationId",
    as: "staff"
  });

  organizationTable.hasMany(models.equipmentTable, {
    foreignKey: "organizationId",
    as: "equipment"
  });
};
    }
  }
  organizationTable.init({
    organizationId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    name: DataTypes.STRING,
    logo: DataTypes.TEXT,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'organizationTable',
  });
  return organizationTable;
};