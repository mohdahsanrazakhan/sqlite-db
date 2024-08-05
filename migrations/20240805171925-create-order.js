'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      unitPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discount: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      afterDiscountAmount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      invoiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Invoices',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      quotationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Quotations',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
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
    return queryInterface.dropTable('Orders');
  }
};
