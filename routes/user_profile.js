// Get all of our friend data
var data = require("../footer.json");

exports.getprofile = function(req, res){

	/* GENERALIZE THIS JSON READING */
	var users = data["teach_education_listing"];

	var userData;
	var index = 0;

	while (true) {
		var currentPerson = users[index];
		if( currentPerson.name == req.query.name){
			userData = users[index];
			console.log(userData);
			break;
		}
		index++;
	}
	/*console.log(data);*/
	res.render('user_profile', userData);
}


