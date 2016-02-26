var data = require("../footer.json");
exports.education = function(req, res) { 

	var listings = data['teach_education_listing'];
	var searchTerm = 'rick ord';
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

	//console.log(result);


	res.render('teach_listing_education', data);
 }
exports.fitness = function(req, res) { 
	res.render('teach_listing_fitness', data);
}
exports.music = function(req, res) { 
	res.render('teach_listing_music', data);
}
exports.culinary = function(req, res) { 
	res.render('teach_listing_culinary', data);
}
exports.beauty = function(req, res) { 
	res.render('teach_listing_beauty', data);
}
exports.search = function(req, res) { 
	res.render('teach_listing_search', data);
}
