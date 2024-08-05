'use strict'
module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('Notes', {
    note: {
      type: DataTypes.STRING,
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
    }
  }, { timestamps: true });

  Notes.associate = function (models) {
    Notes.belongsTo(models.Profile, {
      foreignKey: 'profileId',
      onDelete: 'CASCADE'
    });
    Notes.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Notes;
}