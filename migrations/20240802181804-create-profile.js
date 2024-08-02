'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      businessName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressStreet: {
        type: Sequelize.STRING
      },
      addressCity: {
        type: Sequelize.STRING
      },
      addressState: {
        type: Sequelize.STRING
      },
      addressZip: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      assignTo: {
        type: Sequelize.STRING
      },
      transferTo: {
        type: Sequelize.STRING
      },
      payment: {
        type: Sequelize.FLOAT
      },
      packageName: {
        type: Sequelize.STRING
      },
      packageMonth: {
        type: Sequelize.STRING
      },
      clientStatus: {
        type: Sequelize.STRING
      },
      projectStatus: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Profiles');
  }
};
