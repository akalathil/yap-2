// Get all of our friend data
var dataJson = require('../footer.json');

exports.view = function(req, res){
    var data = {};
    data["footer"] = dataJson;
	//console.log(data);
	res.render('index', data);
};

exports.login = function(req, res){
        var data = {};
    data["footer"] = dataJson;
	//console.log(data);
	res.render('login', data);
};
