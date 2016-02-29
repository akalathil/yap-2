// Get all of our friend data
var dataFooter = require('../footer.json');

exports.messenger = function(req, res){
    var data = {}
    data["footer"] = dataFooter;
	//console.log(data);
	//console.log("BYE")
	res.render('messenger', data);
};

exports.message = function(req, res){
    var data = {}
    data["footer"] = dataFooter;
	var specificMessage = data["footer"]["message"][req.params.name];
    data["message"] = specificMessage;
	res.render('message', data);
    console.log(data["message"]);
};
