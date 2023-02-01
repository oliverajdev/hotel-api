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

    return await queryInterface.bulkInsert('Clients', [
     {
      first_name: 'Jonh',
      last_name: 'Travolta',
      date: '18/02/1954',
      adress: 'calle falsa 123',
      nationality: 'United States',
      phone_number: '1313456',
      email: 'jonht@email.com',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      first_name: 'Olivia',
      last_name: 'Newton',
      date: '26/07/1948',
      adress: 'calle falsa 1234',
      nationality: 'United States',
      phone_number: '13134567',
      email: 'olivian@email.com',
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

     await queryInterface.bulkDelete('Clients', null, {});
  }
};
