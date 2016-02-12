// Get all of our friend data
var data = require("../footer.json");

exports.getprofile = function(req, res){
	console.log(data);
	res.render('user_profile', data);
}
