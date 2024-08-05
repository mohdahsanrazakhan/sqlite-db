'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['1 Month', '3 Month', '6 Month']]
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});

  Plan.associate = function(models) {
    Plan.belongsTo(models.Package, {
      foreignKey: 'packageId',
      onDelete: 'CASCADE'
    });
  };
  
  return Plan;
};
