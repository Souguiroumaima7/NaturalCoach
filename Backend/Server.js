const express =  require("express")
const router = express.Router() 
const app = express()
app.use(express.json())

const database = require("./config/database")
const dotenv = require("dotenv").config()


PORT = process.env.PORT


const client_router = require("./routers/Client_router")
app.use("/clients",client_router)

const auth_router = require("./routers/Auth_router")
app.use ("/auth",auth_router)

const admin_router = require("./routers/Admin_router")
app.use("/admin",admin_router)

const Event_router = require("./routers/Event_router")
app.use("/Events",Event_router)

const Coach_router = require("./routers/Coach_router")
app.use("/Coach",Coach_router)

const Guide_router = require("./routers/Guide_router")
app.use("/Guide",Guide_router)

const Association_router = require("./routers/Association_router")
app.use("/Associations",Association_router)
  




app.listen(PORT,()=>{
    console.log(`server working good on http://localhost:${PORT}`)
 })
    
