const bookingController = require('../controllers/bookingController')
const { Client, Booking } = require('../database/models')

module.exports = {
    createClient: async (first_name,last_name,adress,nationality,phone_number,email) => {

        const [client,created] = await  Client.findOrCreate({
            where:{
                first_name,
                last_name,
                date,
                adress,
                nationality,
                phone_number,
                email
            },
            default:{
                first_name,
                last_name,
                date,
                adress,
                nationality,
                phone_number,
                email
            }
  
        })

        if(created) return client
        return null

    },
    findClientById: async (id) => {

        return await Client.findOne({
            where:{
                id
            },
            include:{
                model:Booking
            }
        })

    }
}