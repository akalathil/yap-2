// Get all of our friend data
var data = require("../users.json");
var dataFooter = require('../footer.json');


exports.getprofile = function(req, res){

	/* GENERALIZE THIS JSON READING */
	var users = data["users"];

	var userData;
	var index = 0;

	while (true) {
		var currentPerson = users[index];
		if( currentPerson.fullname == req.query.name){
			userData = users[index];
			//console.log(userData);
			break;
		}
		index++;
	}
	userData["footer"] = dataFooter;
	/*console.log(data);*/
	res.render('user_profile', userData);
	console.log(userData);
}
