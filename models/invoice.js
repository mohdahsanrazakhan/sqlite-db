'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    invoiceNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    invoiceDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    terms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      allowNull: false
    },
    profileId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Profiles',
        key: 'id'
      },
      allowNull: false
    },
    realPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    realPriceAfterDiscount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discountedAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    gst: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    totalPayableAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, { timestamps: true });

  Invoice.associate = function(models) {
    Invoice.hasMany(models.Order, {
      foreignKey: 'invoiceId',
      onDelete: 'CASCADE'
    });
  };

  return Invoice;
};
