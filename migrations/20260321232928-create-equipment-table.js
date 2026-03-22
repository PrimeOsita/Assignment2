'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipmentTables', {
      equipmentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      equipmentName: {
        type: Sequelize.STRING,
          allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
          allowNull: false
      },
      expirationDate: {
        type: Sequelize.DATE,
          allowNull: false
      },
      status: {
        type: Sequelize.ENUM('good', 'bad', 'new'),
          allowNull: false
      },
      images: {
        type: Sequelize.TEXT,
          allowNull: false
      },
      organizationId: {
        type: Sequelize.UUID,
          allowNull: false,
           references: {
          model: 'organizationTables',
          key: 'organizationId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('equipmentTables');
  }
};