'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trackingNumber: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(20)
      },
      weightKg: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 1)
      },
      sender: {
        type: Sequelize.STRING(50)
      },
      recipient: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      isDelivered: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Packages');
  }
};
