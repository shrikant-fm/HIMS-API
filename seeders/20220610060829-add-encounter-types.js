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
    await queryInterface.bulkInsert('EncounterCatalogs', [
      {
        encounterType: 'Visit a doctor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        encounterType: 'Lab test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('EncounterCatalogs', {[Sequelize.Op.or]: [{encounterType: 'Visit a doctor'}, {encounterType: 'Lab test'}]});
  }
};
