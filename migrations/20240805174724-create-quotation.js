'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Quotations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quotationNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      quotationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      profileId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Profiles',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      realPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      realPriceAfterDiscount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      discountedAmount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      gst: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      totalPayableAmount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Quotations');
  }
};
