'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.hasOne(models.Booking,{ foreignKey: 'Payment_id' })
      Payment.belongsTo(models.Payment_method)
      Payment.belongsTo(models.Billing)
    }
  }
  Payment.init({
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};