
const express = require('express');
const router = require('./routes/routes');
const bodyParer = require('body-Parser');
const mongoose= require('mongoose');


const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/ninjaa');
mongoose.Promise = global.Promise;


app.use(bodyParer.json());
app.use('/api', router);
app.use( function(req,res,next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})
app.use(function(err,req,res,next){  //catch error : validification
 	res.status(422).send({error:err.message});
});
app.use(express.static('public')); //put html page in that folder to be displayed



app.listen(process.env.port || 3000, function(){
	console.log('Now listening');
})

// app.listen(3000)

