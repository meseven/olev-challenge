var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var driverSchema = new Schema({
	name: String,
	surname: String,
	location: String
});


module.exports = mongoose.model('drivers', driverSchema);