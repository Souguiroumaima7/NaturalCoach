const Event_model = require ("../models/Event_model") 

module.exports = ({

    create : (req,res) =>{
        const Event = new Event_model(req.body) 
        Event.save(req.body,(err,item)=>{
        if(err){
            res.status(406).json({message : "failed to create Event"})
        }
        else{
            res.status(201).json({message : "created Event"}) 
            
        }
    

       }) 
},

getall : (res, req) => {
    Event_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all Guide  "})
        }
        else{
           res.status(201).json({message : "Get all Guide successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Event_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Guide by id "})
        }
        else{
            res.status(201).json({message : "Get Guide by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Event_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get Guide by name "})  
        }
        else{
            res.status(201).json({message : "Get Guide by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Event_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Guide" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Event_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete Guide" })
            
        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})









