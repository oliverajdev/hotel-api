'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Room_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      room_number: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(1000)
      },
      area: {
        type: Sequelize.INTEGER
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      adults: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      children: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      breakfast: {
        type: Sequelize.BOOLEAN
      },
      single_bed: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      double_bed: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      air_conditioner: {
        type: Sequelize.BOOLEAN
      },
      tv: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Room_details');
  }
};