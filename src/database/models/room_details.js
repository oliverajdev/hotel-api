'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room_detail.hasMany(models.Booking,{ foreignKey: 'Room_detail_id' })
    }
  }
  Room_detail.init({
    price: DataTypes.INTEGER,
    room_number: DataTypes.INTEGER,
    description: DataTypes.STRING,
    area: DataTypes.INTEGER,
    wifi: DataTypes.BOOLEAN,
    adults: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    breakfast: DataTypes.BOOLEAN,
    single_bed: DataTypes.INTEGER,
    double_bed: DataTypes.INTEGER,
    air_conditioner: DataTypes.BOOLEAN,
    tv: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Room_detail',
  });
  return Room_detail;
};