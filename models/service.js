'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    servicePrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});
  Service.associate = function(models) {
    // associations can be defined here
  };
  return Service;
};
