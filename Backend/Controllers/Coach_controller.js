const Coach_model = require ("../models/Coach_model") 

module.exports = ({

    create : (req,res) =>{
        const coach = new Coach_model(req.body) 
       Coach.save(req.body,(err,item)=>{
        if(err){
            res.status(406).json({message : "failed to create coach"})
        }
        else{
            res.status(201).json({message : "created coach"}) 
            
        }
    

       }) 
},

getall : (res, req) => {
    Coach_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all Coach  "})
        }
        else{
           res.status(201).json({message : "Get all Coach successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Coach_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Coach by id "})
        }
        else{
            res.status(201).json({message : "Get Coach by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Coach_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Coach by name "})  
        }
        else{
            res.status(201).json({message : "Get Coach by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Coach_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Coach" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Coach_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete Coach" })
            
        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})









