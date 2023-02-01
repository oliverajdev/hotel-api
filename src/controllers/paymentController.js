const { ErrorObject } = require("../helpers/error")
const { endpointResponse } = require("../helpers/success")
const { createBilling } = require("../services/billingService")
const { setPayment, findBookingById } = require("../services/bookingService")
const { createPayment, findAllPayment_methods } = require("../services/paymentService")

module.exports = {
    create: async (req,res,next) => {
        try{
            const {  
                first_name,
                last_name,
                adress,
                location,
                phone_number,
                zip_code,
                amount,
                Payment_method_id,
                Booking_id } = req.body

                const booking = await findBookingById(Booking_id)

                if(booking.Status_id === 2 || booking.Status_id === 3) throw new ErrorObject('Booking payment or removed',400)



           const billing = await createBilling(first_name,last_name,adress,location,phone_number,zip_code);
           const payment = await createPayment(amount,billing.id,Payment_method_id);

           setPayment(payment.id,Booking_id);

           endpointResponse({
            res,
            code:201,
            message: 'Payment applied successfully'
           })

        }catch(err){
            console.log(err)
            next(err)
            
        }

    },
    findPayment_methods: async (req,res,next) => {
        try{

            const payment_methods = await findAllPayment_methods()

            endpointResponse({
                res,
                message:'Request successfully',
                body: payment_methods
            })

        }catch(err){
            next(err)
        }
    }
}