// Get all of our friend data
var data = require('../footer.json');

exports.messenger = function(req, res){
	console.log(data);
	res.render('message', data);
};
