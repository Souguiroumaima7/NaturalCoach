const usermodel = require("./User_model")     

const mongoose = require ("mongoose")   



const AssociationSchema = new mongoose.Schema({
     FullName :
     {
       type: String , 
       required : true 
     },
     Email : {
        type: String , 
        required : true 
     },
     PhoneNumber : {
        type : String , 
        required : true 
     },
     UserId : {
        type : String , 
        required : true 
     }

})

module.exports = mongoose.model("Associations",AssociationSchema)