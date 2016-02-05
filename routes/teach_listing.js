var data = require("../footer.json");
exports.education = function(req, res) { 
	// Your code goes here
	console.log("HI")
	res.render('teach_listing_education', data);
 }
