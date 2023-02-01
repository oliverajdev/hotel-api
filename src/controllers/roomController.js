const { ErrorObject } = require("../helpers/error");
const { endpointResponse } = require("../helpers/success");
const { findRoomById, findRoomAll, findRoomByDate } = require("../services/roomServices");
const { verifyDate} = require("../utils/handlerDate");



module.exports = {
    findById: async (req,res,next) => {
        try{
            const { id } = req.params;

            const room = await findRoomById(id);

            endpointResponse({
                res,
                message:'Request succesfully',
                body: room
            })

        
        }catch(err){
            next(err);
            
        }

    },
    findAll: async (req,res,next) => {
        try{

            const rooms = await findRoomAll();

            endpointResponse({
                res,
                message:'Request succesfully',
                body: rooms
            })

        }catch(err){
            next(err);
        }
    },
    findByDates: async (req,res,next) => {
        try{
            
            if(!(req.query.check_in && req.query.check_out)) return next()

            const  switchDate = verifyDate(new Date(req.query.check_in),new Date(req.query.check_out));

            if(!switchDate) throw new ErrorObject('Invalid Dates',400);


            const {check_in,check_out} = req.query;


            const rooms = await findRoomByDate(check_in,check_out);

            endpointResponse({
                res,
                message:'Request succesfully',
                body: rooms
            })

        }catch(err){
            next(err)
        }
    }
}