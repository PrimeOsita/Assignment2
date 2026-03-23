'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deliveryTables', {
      deliveryId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      processedBy: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('pending', 'processing', 'delivered'),
        allowNull: false
      },
      clothType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      staffId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'staffTables',
          key: 'staffId'
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
    await queryInterface.dropTable('deliveryTables');
  }
};