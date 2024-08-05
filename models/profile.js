'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    lastName: {
      type: DataTypes.STRING, 
      allowNull: false 
    },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    businessName: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    addressStreet: { type: DataTypes.STRING },
    addressCity: { type: DataTypes.STRING },
    addressState: { type: DataTypes.STRING },
    addressZip: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    assignTo: { type: DataTypes.STRING },
    transferTo: { type: DataTypes.STRING },
    payment: { type: DataTypes.FLOAT },
    packageName: { type: DataTypes.STRING },
    packageMonth: { type: DataTypes.STRING },
    clientStatus: { type: DataTypes.STRING },
    projectStatus: { type: DataTypes.STRING },
    feedback: { type: DataTypes.STRING }
  }, {});
  
  Profile.associate = function(models) {
    Profile.hasMany(models.Notes, {
      foreignKey: 'profileId',
      onDelete: 'CASCADE'
    });
  };
  
  return Profile;
};
