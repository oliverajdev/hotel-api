/* eslint-disable no-undef */
module.exports = {
    async up(queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.addColumn('Bookings', 'Room_detail_id', {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Room_details',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }),
        queryInterface.addColumn('Bookings', 'Payment_id', {
            type: Sequelize.INTEGER,
            references: {
              model: 'Payments',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),
          queryInterface.addColumn('Payments', 'Payment_method_id', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Payment_methods',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }), 
          queryInterface.addColumn('Bookings', 'Client_id', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Clients',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),
          queryInterface.addColumn('Payments', 'Billing_id', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Billings',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }), 
          queryInterface.addColumn('Bookings', 'Status_id', {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Statuses',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }), 


      ]);
    },
  
    async down(queryInterface) {
      return Promise.all([
        queryInterface.removeColumn('Bookings', 'Room_details_id'),
        queryInterface.removeColumn('Bookings', 'Payment_id'),
        queryInterface.removeColumn('Payments', 'Payment_methods_id'),
        queryInterface.removeColumn('Payments', 'Client_id'),
        queryInterface.removeColumn('Payments', 'Billing_id'),
        queryInterface.removeColumn('Bookings', 'Status_id'),
      ]);
    },
  };
  