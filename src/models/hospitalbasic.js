const mongoose = require("mongoose");
const validator = require("validator");

const hospitalSchema = new mongoose.Schema({
    Hospital_id:{type:Number},
    Total_Patients:{type:Number},
    Totel_Beds:{type:Number},
    Occupied_Beds:{type:Number},
    Empty_Beds:{type:Number},
    Oxygen_Availability:{type:Number},
    Medicine_Status:{type:String}

}, {collection:"HospitalBasicDetails"})

const hospitaldetails = new mongoose.model("HospitalBasicDetails" ,hospitalSchema);
module.exports = hospitaldetails;