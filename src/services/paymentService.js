const { Payment, Payment_method } = require('../database/models')

module.exports = {
    createPayment: async (amount,Billing_id,Payment_method_id) => {

        const payment = await Payment.create({
            amount,
            Billing_id,
            Payment_method_id
        })

   

        return payment

    },
    findAllPayment_methods: async () => {
        return await Payment_method.findAll({
            attributes: ['id','name']
        })
    }
}