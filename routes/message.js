// Get all of our friend data
var data = require('../footer.json');

exports.messenger = function(req, res){
	//console.log(data);
	res.render('messenger', data);
};

exports.message = function(req, res){
	console.log("HI")
	res.render('message', data);
};
