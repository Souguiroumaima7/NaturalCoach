const route = require("express").Router()

const Guide_Controller =  require("../Controllers/Guide_controller")
const Upload = require("../middlewares/UploadFiles") 

route.post("/create",Guide_Controller.create)
route.get("/getall",Guide_Controller.getall)
route.get("/getbyid",Guide_Controller.getbyid)
route.get("/getbyname",Guide_Controller.getbyname)
route.put("/update/:id",Guide_Controller.update)
route.delete("/delete/:id",Guide_Controller.delete) 


module.exports = route  

