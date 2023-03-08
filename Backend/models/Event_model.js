const mongoose = require("mongoose") 

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true 
    },
    description: {
        type: String ,
        required : true 
    },
    startDate: {
        type: Date,
        required : true 
    },
    endDate: {
       type : Date ,
       required : true 

    },
    location: {
        type: String ,
        required :true 
    },
    eventType: {
        type: String , 
        required : true 
    },
    eventStatus: {
        type: String ,
        required : true 
    },
    createdAt: {
        type: Date,
        required : true 
    },
    updatedAt: {
        type: Date ,
        required : true
    }


})

module.exports = mongoose.model("Events",EventSchema)   
