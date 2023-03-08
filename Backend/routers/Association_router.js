const route = require("express").Router()

const Association_Controller = require("../Controllers/Association_controller")
const Upload = require("../middlewares/UploadFiles") 

route.post("/create",Association_Controller.create)
route.get("/getall",Association_Controller.getall)
route.get("/getbyid",Association_Controller.getbyid)
route.get("/getbyname",Association_Controller.getbyname)
route.put("/update/:id",Association_Controller.update)
route.delete("/delete/:id",Association_Controller.delete) 


module.exports = route  

