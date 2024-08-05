'use strict';
module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define('Package', {
    packageName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});

  Package.associate = function(models) {
    Package.hasMany(models.Plan, {
      foreignKey: 'packageId',
      onDelete: 'CASCADE'
    });
  };
  
  return Package;
};
