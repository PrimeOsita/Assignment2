'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderTables', {
      orderId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      orderType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      images: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('pending', 'processing', 'completed'),
        allowNull: false
      },
      staffName: {
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
    await queryInterface.dropTable('orderTables');
  }
};