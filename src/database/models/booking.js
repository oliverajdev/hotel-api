'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Room_detail,{ foreignKey: 'Room_detail_id' })
      Booking.belongsTo(models.Payment,{ foreignKey: 'Payment_id' })
      Booking.belongsTo(models.Status,{foreignKey: 'Status_id'})
      Booking.belongsTo(models.Client, {foreignKey: 'Client_id'})
        }
  }
  Booking.init({
    check_in: DataTypes.DATEONLY,
    check_out: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};