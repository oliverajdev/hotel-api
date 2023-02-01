'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.hasMany(models.Booking, {foreignKey: 'Client_id'})
    }
  }
  Client.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date: DataTypes.STRING,
    adress: DataTypes.STRING,
    nationality: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};