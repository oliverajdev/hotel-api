const { ErrorObject } = require("../helpers/error")
const { endpointResponse } = require("../helpers/success")
const { createBooking, findBookingCheckRoom, removedBooking, findBookingById } = require("../services/bookingService")
const { verifyDate, checkDate } = require("../utils/handlerDate")


module.exports = {
    create: async (req,res,next) => {
        try{
            let {
                check_in,
                check_out,
                Client_id,
                Room_detail_id,
                Status_id,
                Payment_id=null
            } = req.body



            check_in = new Date(check_in);

            check_out = new Date(check_out);

            const  switchDate = verifyDate(check_in,check_out);

            if(!switchDate) throw new ErrorObject('Invalid Dates',400);

            const roomChecks = await findBookingCheckRoom(Room_detail_id)

            const switchCheck =  checkDate(roomChecks,check_in,check_out)

            if(!switchCheck) throw new ErrorObject('Invalid dates',400)

            const booking = await createBooking(check_in,check_out,Client_id,Room_detail_id,Status_id,Payment_id);
            
            endpointResponse({
                res,
                code:201,
                message:'Created successfully',
                body: booking
            })
        }catch(err){
            next(err); 
        }

    },

    updateRemoveStatus: async (req,res,next) => {
        try{
            const {Booking_id} = req.body;


            const booking = await removedBooking(Booking_id);

            if(!booking[0]) throw new ErrorObject('Invalid Id or Booking already removed',400)

            endpointResponse({
                res,
                code:201,
                message:'Created successfully',
            })

        }catch(err){
            next(err)
        }
    }
}