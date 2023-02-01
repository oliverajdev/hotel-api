'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Billing.hasOne(models.Payment, {foreignKey: 'Billing_id'})
    }
  }
  Billing.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    adress: DataTypes.STRING,
    location: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    zip_code: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Billing',
  });
  return Billing;
};