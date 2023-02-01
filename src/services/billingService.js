const { Billing } = require('../database/models')

module.exports = {
    createBilling: async (first_name,last_name,adress,location,phone_number,zip_code) => {

        return await Billing.create({
            first_name,
            last_name,
            adress,
            location,
            phone_number,
            zip_code
        })

    }
}