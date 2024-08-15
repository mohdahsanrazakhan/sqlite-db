// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('Notes', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       note: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       userId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'Users',
//           key: 'id'
//         },
//         allowNull: false,
//         onDelete: 'CASCADE'
//       },
//       profileId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'Profiles', // Ensure this matches your table name
//           key: 'id'
//         },
//         allowNull: false,
//         onDelete: 'CASCADE'
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
//       }
//     });
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('Notes');
//   }
// };

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Profiles',
          key: 'id'
        },
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
    return queryInterface.dropTable('Notes');
  }
};
