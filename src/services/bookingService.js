const { Booking, Payment, Room_detail } = require('../database/models');
const { Op } = require('sequelize')

module.exports = {
    createBooking: async (check_in,check_out,Client_id,Room_detail_id,Status_id=1,Payment_id) => {


        if(Payment_id) Status_id=2;

        const booking = await Booking.create({
            check_in,
            check_out,
            Room_detail_id,
            Status_id,
            Client_id
        });

        if(Payment_id) await booking.setPayment(Payment_id);

        return booking

    },
    setPayment: async (Payment_id,Booking_id) =>{

        const bookingUpdate = await Booking.update({Payment_id,Status_id: 2},{
            where:{
                id: Booking_id
            }
        })

        return bookingUpdate

    },
    removedBooking: async (Booking_id) => {

        return await Booking.update({
            Status_id: 3
        },{
            where: {
                id: Booking_id,
                Status_id: {[Op.ne]: 3}
            }
        })

        

    },
    findBookingCheckRoom: async (Room_detail_id) => {

        return await Booking.findAll({
            where:{
                Status_id:{ [Op.ne]: 3}
            },
            attributes:['check_in','check_out'],
            include:{
                model: Room_detail,
                where: {
                    id:Room_detail_id
                },
                attributes:[]
            },
            raw: true,

        })

        
    },
    findBookingById: async (Booking_id) => {

        return await Booking.findOne({
            where:{
             id: Booking_id,
            }
        })
    }
}