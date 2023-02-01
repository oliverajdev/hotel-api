
module.exports = { 
 verifyDate: (check_in,check_out) => {
   const today = new Date()
    if((check_out.getTime() > check_in.getTime()) && check_in.getTime() > today.getTime() ) return true
    return false

},
checkDate: (roomsChecks,check_in,check_out) => {
   for(let e of roomsChecks){
     if(!(check_in.getTime() > new Date(e.check_out).getTime() || check_out.getTime() < new Date(e.check_in).getTime())) return false
   }
   return true
}

}