const { ErrorObject } = require("../helpers/error")
const { endpointResponse } = require("../helpers/success")
const { createClient, findClientById } = require("../services/clientService")


module.exports = {
    create: async (req,res,next) => {
        try{

            const {
                first_name,
                last_name,
                date,
                adress,
                nationality,
                phone_number,
                email
            } = req.body


            const client = await createClient( 
                first_name,
                last_name,
                date,
                adress,
                nationality,
                phone_number,
                email)

            if(!client) throw ErrorObject('Client already exist',400)

            endpointResponse({
                res,
                code:201,
                message: 'Created successfully',
                body: client
            })
            

        }catch(err){
            next(err)  
        }

    },
    findById: async (req,res,next) => {
        try{

            const { id } = req.params

           const client = await findClientById(id)

           if(!client) throw new ErrorObject('Invalid id',400);

           endpointResponse({
            res,
            message:'Request successfully',
            body: client
           })

        }catch(err){
            next(err)
        }
    }
}