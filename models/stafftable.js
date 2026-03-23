'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staffTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      staffTable.associate = (models) => {
  staffTable.belongsTo(models.organizationTable, {
    foreignKey: "organizationId",
    as: "organization"
  });
};

    staffTable.associate = (models) => {
  staffTable.hasMany(models.orderTable, {
    foreignKey: "staffId",
    as: "orders"
  });

  staffTable.hasMany(models.deliveryTable, {
    foreignKey: "staffId",
    as: "deliveries"
  });
};
    }
  }
  staffTable.init({
     staffId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    staffName: DataTypes.STRING,
    position: DataTypes.STRING,
    staffDp: DataTypes.TEXT,
    salary: DataTypes.INTEGER,
    profilePhoto: DataTypes.TEXT,
    organizationId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'staffTable',
  });
  return staffTable;
};