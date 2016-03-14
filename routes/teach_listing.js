var dataFooter = require("../footer.json");
exports.education = function(req, res) {
	var data = {};
	data["footer"] = dataFooter;
	res.render('teach_listing_education', data);
}
exports.fitness = function(req, res){
	var data = {};
	data["footer"] = dataFooter;
	res.render('teach_listing_fitness', data);
}
exports.music = function(req, res) {
	var data = {};
	data["footer"] = dataFooter;
	res.render('teach_listing_music', data);
}
exports.culinary = function(req, res) {
	var data = {};
	data["footer"] = dataFooter;
	res.render('teach_listing_culinary', data);
}
exports.beauty = function(req, res) {
	var data = {};
	data["footer"] = dataFooter;
	res.render('teach_listing_beauty', data);
}

exports.search = function(req, res) {
	var data = {};
	var searchTerm = '';
	data["footer"] = dataFooter;

	if (req.query && req.query.search) {
		searchTerm = req.query.search;
	}

	if (!searchTerm) {
		res.render('teach_listing_search', data);
	} else {
		var listings = data["footer"]['teach_education_listing'];
		listings = listings.concat(data["footer"]['teach_music_listing'])
		listings = listings.concat(data["footer"]['teach_beauty_listing'])
		listings = listings.concat(data["footer"]['teach_fitness_listing'])
		listings = listings.concat(data["footer"]['teach_culinary_listing'])

		var result = [];

		listings.map(function (obj) {
			for (var prop in obj) {
				if (obj[prop].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
					result.push(obj);
					return 0;
				}
			}
			return 0;
		});
		data.result = result;
		if(data.result[0] == null) {
			data.empty_message = "No listing that matches your keyword found.";
		}
		else {
			data.empty_message = "";
		}
		res.render('teach_listing_search', data);
	}
}
