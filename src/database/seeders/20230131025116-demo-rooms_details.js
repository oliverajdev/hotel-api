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
   await queryInterface.bulkInsert('Room_details', [
    {
     price: 454,
     room_number: 1,
     description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a laoreet justo. Pellentesque in metus aliquam, pulvinar odio nec, condimentum neque. Cras a lacinia erat. Quisque porta sapien vitae arcu luctus pretium. Quisque a finibus lorem. Nulla fringilla nisi at purus sodales fermentum. Aliquam quis tincidunt orci. Donec orci nibh, sagittis non augue ac, elementum tempus libero. Duis egestas aliquet odio, eget sagittis purus condimentum non. Vivamus eget metus semper, mattis urna sit amet, molestie quam. Duis scelerisque risus sit amet felis sagittis maximus',
     area: 35,
     wifi: true,
     adults: 2,
     children: 0,
     breakfast: true,
     double_bed: 1,
     air_conditioner: true,
     tv: true,
     createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
      price: 740,
      room_number: 2,
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a laoreet justo. Pellentesque in metus aliquam, pulvinar odio nec, condimentum neque. Cras a lacinia erat. Quisque porta sapien vitae arcu luctus pretium. Quisque a finibus lorem. Nulla fringilla nisi at purus sodales fermentum. Aliquam quis tincidunt orci. Donec orci nibh, sagittis non augue ac, elementum tempus libero. Duis egestas aliquet odio, eget sagittis purus condimentum non. Vivamus eget metus semper, mattis urna sit amet, molestie quam. Duis scelerisque risus sit amet felis sagittis maximus',
      area: 45,
      wifi: true,
      adults: 2,
      children: 2,
      breakfast: true,
      double_bed: 1,
      single_bed: 2,
      air_conditioner: true,
      tv: true,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      price: 390,
      room_number: 3,
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a laoreet justo. Pellentesque in metus aliquam, pulvinar odio nec, condimentum neque. Cras a lacinia erat. Quisque porta sapien vitae arcu luctus pretium. Quisque a finibus lorem. Nulla fringilla nisi at purus sodales fermentum. Aliquam quis tincidunt orci. Donec orci nibh, sagittis non augue ac, elementum tempus libero. Duis egestas aliquet odio, eget sagittis purus condimentum non. Vivamus eget metus semper, mattis urna sit amet, molestie quam. Duis scelerisque risus sit amet felis sagittis maximus',
      area: 30,
      wifi: true,
      adults: 2,
      children: 0,
      breakfast: true,
      single_bed: 2,
      air_conditioner: true,
      tv: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      
     }
  ],);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Room_details', null, {});
  }
};
