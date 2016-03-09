// Get all of our friend data
var dataFooter = require('../footer.json');

exports.messenger = function(req, res){
    var data = {}
    data["footer"] = dataFooter;
	res.render('messenger', data);
};

exports.message = function(req, res){
    var data = {}
    data["footer"] = dataFooter;
	var specificMessage = data["footer"]["message"][req.params.name];
    console.log(req)
    console.log(req.params)
    console.log(req.params.name)
    data["message"] = specificMessage;
	res.render('message', data);
    //console.log(data["message"]);
};
