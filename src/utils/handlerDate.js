
module.exports = { 
 verifyDate: (check_in,check_out) => {
   let today = new Date()
   let year = today.toLocaleString("default", { year: "numeric" });
   let month = today.toLocaleString("default", { month: "2-digit" });
   let day = today.toLocaleString("default", { day: "2-digit" });
   today = year + "/" + month + "/" + day;
   today = new Date(today)
   console.log((check_out.getTime() > check_in.getTime()) && check_in.getTime()  > today.getTime() )
    if((check_out.getTime() > check_in.getTime()) && check_in.getTime()  >= today.getTime() ) return true
    return false

},
checkDate: (roomsChecks,check_in,check_out) => {
   console.log(roomsChecks)
   for(let e of roomsChecks){
     if(!(check_in.getTime() > new Date(e.check_out).getTime() || check_out.getTime() < new Date(e.check_in).getTime())) return false
   }
   return true
}

}