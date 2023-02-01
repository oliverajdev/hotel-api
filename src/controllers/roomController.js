const { ErrorObject } = require("../helpers/error");
const { findRoomById, findRoomAll, findRoomByDate } = require("../services/roomServices");
const { verifyDate} = require("../utils/handlerDate");



module.exports = {
    findById: async (req,res,next) => {
        try{
            const { id } = req.params;

            const room = await findRoomById(id);

            res.status(200).json(room);

        
        }catch(err){
            next(err);
            
        }

    },
    findAll: async (req,res,next) => {
        try{

            const rooms = await findRoomAll();

            res.status(200).json(rooms);

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

            res.status(200).json(rooms)

        }catch(err){
            next(err)
        }
    }
}