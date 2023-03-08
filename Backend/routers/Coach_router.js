const route = require("express").Router()

const Coach_Controller =  require("../Controllers/Coach_controller")
const Upload = require("../middlewares/UploadFiles") 

route.post("/create",Coach_Controller.create)
route.get("/getall",Coach_Controller.getall)
route.get("/getbyid",Coach_Controller.getbyid)
route.get("/getbyname",Coach_Controller.getbyname)
route.put("/update/:id",Coach_Controller.update)
route.delete("/delete/:id",Coach_Controller.delete) 


module.exports = route  

