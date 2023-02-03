const { Room_detail, Booking } = require('../database/models')
const { Op } = require('sequelize')

module.exports = {
    findRoomById: async (Room_detail_id) => {

        const room = await Room_detail.findOne({
            where:{
                id: Room_detail_id
            },
            include: {
                model:Booking
            }
        })

        return room
    },
    findRoomAll: async () => {

        return await Room_detail.findAll({
            include: {
                model:Booking
            }
        })


    },
    findRoomByDate: async (check_in,check_out) => {

        const reservedRoom = await Room_detail.findAll({
            include:{
                model:Booking,
                where: {
                    [Op.and]: [
                      { check_in:{[Op.gt]:check_in} },
                      { check_out:{[Op.lt]:check_out} },
                      { Status_id: {[Op.ne]: 3}}
                    ],
                    
                  },
            },
              
        })

        const reservedRoomIds = reservedRoom.map( e => e.dataValues.id)
        return await Room_detail.findAll({
            where: {
                id: {[Op.ne]: reservedRoomIds}
            }
        })

  
    }
    }

   