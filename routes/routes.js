const express = require('express');
const router = express.Router();
const Data = require('./../models/status');


router.get('', function(req,res){
   Data.find({}).then(function(data){
   	res.send(data)
   })
});




router.post('', function(req, res) {
    var user = new Data({
      name:req.body.name,
      content:req.body.content,
      likes:req.body.likes,
      comments:req.body.comments
      
    });


    user.save(function(err) {
      if(err){ 
       res.send(err);
        return;
      } 
 res.send(Data);
     });
  });

/*

router.post('',function(req,res,next){
  Data.create(req.body.Data).then(function(err,Data){
    if(err){
      res.send(err);
    }else{
res.send(Data)};
  }).catch(next);
  
}); */


module.exports = router;