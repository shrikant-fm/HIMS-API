'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('PatientEncounters',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    patientId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'PatientCatalogs',
        },
        key: 'id'
      },
      allowNull: false
    },
 
    encounterCatalogId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'EncounterCatalogs',
        },
        key: 'id'
      },
      allowNull: false
    },
    encounterTypeText : {
        type: Sequelize.STRING,
    },

    primaryComplaint : {
      type : Sequelize.STRING

    },
    secondaryComplaint : {
      type : Sequelize.STRING
    },
    
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PatientEncounters');
  }
};
