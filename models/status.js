/* /dependance:
var restful = require('node-restful');
// var mongoose = restful.mongoose;
var mongoose = restful.mongoose;

 
//schema:
var statusSchema = new mongoose.Schema({
	name: String,
	content: String,
	likes: Number,
	comments: Number
});

//return models:
//module.exports = restful.model('personal_info', statusSchema);
module.exports = mongoose.model("personal",statusSchema);
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const DataSchema = new Schema({
	name: String,
	content: String,
	likes: Number,
	comments: Number
});





const Data = mongoose.model('android_data', DataSchema);

module.exports = Data;