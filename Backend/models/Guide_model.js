
const mongoose  = require("mongoose") 


const GuideSchema = new mongoose.Schema({
    title: {
        type : String , 
        required : true 
    }, 
    content: {
        type : String , 
        required : true 
    }


})

module.exports = mongoose.model("Guide",GuideSchema)   
