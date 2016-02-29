'use strict';

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

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".fa-angle-double-left").click(backButtonClicked);
}

function backButtonClicked(e){
	e.preventDefault();
	console.log("Back button clicked")
	ga("send", "event", "back", "click");
}
