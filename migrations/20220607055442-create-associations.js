'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Prescriptions', 'patientId', {
          type: Sequelize.INTEGER,
          references:{
            model: {
              tableName: 'PatientCatalogs',
            },
            key:'id'
          }
        }, { transaction: t }),
        queryInterface.addColumn('Prescriptions', 'doctorId', {
          type: Sequelize.DataTypes.INTEGER,
          references:{
            model: {
              tableName: 'Doctors',
            },
            key:'id'
          }
        }, { transaction: t }),
        queryInterface.addColumn('Prescriptions', 'patientEncounterId', {
          type: Sequelize.DataTypes.INTEGER,
          references:{
            model: {
              tableName: 'PatientEncounters',
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
        queryInterface.removeColumn('Prescriptions', 'patientId', { transaction: t }),
        queryInterface.removeColumn('Prescriptions', 'doctorId', { transaction: t }),
        queryInterface.removeColumn('Prescriptions', 'patientEncounterId', { transaction: t })
      ]);
    });
  }
};