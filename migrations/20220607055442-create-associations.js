'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('PrescriptionCatalogs', 'patientId', {
          type: Sequelize.INTEGER,
          references:{
            model: {
              tableName: 'PatientCatalogs',
            },
            key:'id'
          }
        }, { transaction: t }),
        queryInterface.addColumn('PrescriptionCatalogs', 'doctorId', {
          type: Sequelize.DataTypes.INTEGER,
          references:{
            model: {
              tableName: 'Doctors',
            },
            key:'id'
          }
        }, { transaction: t }),
        queryInterface.addColumn('PrescriptionCatalogs', 'patinetEncounterId', {
          type: Sequelize.DataTypes.INTEGER,
          references:{
            model: {
              tableName: 'patientEncounters',
            },
            key:'id'
          }
        }, { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('PrescriptionCatalogs', 'patientId', { transaction: t }),
        queryInterface.removeColumn('PrescriptionCatalogs', 'doctorId', { transaction: t }),
        queryInterface.removeColumn('PrescriptionCatalogs', 'patinetEncounterId', { transaction: t })
      ]);
    });
  }
};