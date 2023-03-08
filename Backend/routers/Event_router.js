const route = require("express").Router()

const Event_Controller =  require("../Controllers/Event_Controller")
const Upload = require("../middlewares/UploadFiles") 

route.post("/create",Event_Controller.create)
route.get("/getall",Event_Controller.getall)
route.get("/getbyid",Event_Controller.getbyid)
route.get("/getbyname",Event_Controller.getbyname)
route.put("/update/:id",Event_Controller.update)
route.delete("/delete/:id",Event_Controller.delete) 


module.exports = route  

