const { Payment } = require('../database/models')

module.exports = {
    createPayment: async (amount,Billing_id,Payment_method_id) => {

        const payment = await Payment.create({
            amount,
            Billing_id,
            Payment_method_id
        })

   

        return payment

    }
}