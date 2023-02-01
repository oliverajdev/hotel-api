const { query } = require("express");
const { findRoomById, findRoomAll, findRoomByDate } = require("../services/roomServices")



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
            const {check_in,check_out} = req.query;


            const rooms = await findRoomByDate(check_in,check_out);

            res.status(200).json(rooms)

        }catch(err){
            next(err)
        }
    }
}