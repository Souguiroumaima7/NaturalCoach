const Association_model = require("../models/Association_model") 


module.exports = ({
    create: (req,res) => {
        const association = new Association_model(req.body)
        association.save(req.body,function(err,item){
            if(err){
                res.status(406).json({message : "failed to create an association "})
            }
            else{
                res.status(201).json({message : "association created successfully ", data:item})
            }

        })

    },
  getall : (res, req) => {
     Association_model.find({},(err,item) =>{
        if(err){
           res.status(406).json({message : "failed to Get all association  "})
        }
        else{
           res.status(201).json({message : "Get all associations successfully ",data:items})
        }

     })
  }, 
  getbyid : (req,res) =>{
    Association_model.findById(req.params.id,(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get association by id "})
        }
        else{
            res.status(201).json({message : "Get association by id successfully ",data:item})
        }

  })
  },
  getbyname : (req,res) =>{
    Association_model.find({name:req.query.name},(err,item) =>{
        if(err){
            res.status(406).json({message : "failed to Get association by name "})  
        }
        else{
            res.status(201).json({message : "Get association by name successfully ",data:item})           
        }
  })
},
update: function(req, res) {
    Association_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
        function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to update Association" })


            } else {

                res.status(201).json({ message: " success of update", data: item })
            }
        })


},
delete: function(req, res) {
    Association_model.findByIdAndRemove(req.params.id, function(err, item) {
        if (err) {
            res.status(406).json({ message: "failed to delete association" })


        } else {

            res.status(201).json({ message: " success of delete" })
        }
    })

}

})