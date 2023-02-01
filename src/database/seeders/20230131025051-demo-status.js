'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    return await queryInterface.bulkInsert('Statuses', [
      {
        
        name: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pagado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eliminado',
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Statues', null, {});
  }
};
