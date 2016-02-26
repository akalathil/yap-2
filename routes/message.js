// Get all of our friend data
var data = require('../footer.json');

exports.messenger = function(req, res){
	//console.log(data);
	console.log("BYE")

	res.render('messenger', data);
};

exports.message = function(req, res){
	var specificMessage = data["message"][req.params.name];
	specificMessage['footer-menu'] = data['footer-menu'];
	res.render('message', specificMessage);
};
