'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('PatientCatalogs', [
      {
        id: 10000000,
        patientName: "Patient1",
        dateOfBirth: "2015-08-15",
        phoneNo: 1234567890,
        pincode: 411007,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('PatientCatalogs', {[Sequelize.Op.or]: [{id: 10000000}]});
  }
};
