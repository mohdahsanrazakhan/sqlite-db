'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    itemNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    afterDiscountAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Invoices',
        key: 'id'
      },
      allowNull: false
    },
    quotationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Quotations',
        key: 'id'
      },
      allowNull: false
    }
  }, {});

  Order.associate = function(models) {
    Order.belongsTo(models.Invoice, {
      foreignKey: 'invoiceId',
      onDelete: 'CASCADE'
    });
    Order.belongsTo(models.Quotation, {
      foreignKey: 'quotationId',
      onDelete: 'CASCADE'
    });
  };
  
  return Order;
};
