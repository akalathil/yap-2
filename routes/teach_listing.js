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
	data["footer"] = dataFooter;
	var searchTerm = '';

	if (req.query && req.query.search) {
		searchTerm = req.query.search;
	}

	console.log(req.query.search);

	var listings = data["footer"]['teach_education_listing'];
	// var searchTerm = $("#search-text").val();
	console.log("Search Term is: ")
	console.log(searchTerm)
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
	res.render('teach_listing_search', data);
}
