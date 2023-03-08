const user_model = require ("./User_model") 

const mongoose = require("mongoose")   



const CoachSchema = new mongoose.Schema({

identitycardNb :
 {
    type : String , 
    required : true 
}

})


const Coach = user_model.discriminator("Coach",CoachSchema)

module.exports = mongoose.model("Coach")   


       