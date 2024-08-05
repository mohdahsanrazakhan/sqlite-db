'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quotation = sequelize.define('Quotation', {
    quotationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    quotationDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
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

  Quotation.associate = function(models) {
    Quotation.hasMany(models.Order, {
      foreignKey: 'quotationId',
      onDelete: 'CASCADE'
    });
  };

  return Quotation;
};
