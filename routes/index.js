// Get all of our friend data
var data = require('../footer.json');

exports.view = function(req, res){
	//console.log(data);
	res.render('index', data);
};

exports.login = function(req, res){
	//console.log(data);
	res.render('login', data);
};
