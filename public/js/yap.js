'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#fb').click(login);
    $('#google').click(login);
	$(".fa-angle-double-left").click(backButtonClicked);
	$(".fa-search").click(searchFn);
}
function login(e) {
	// Prevent following the link
	e.preventDefault();

	console.log("CLICKED")
    console.log(document.location.href)
    var currURL = document.location.href;
    document.location.href = currURL+'home';
}

function backButtonClicked(e) {
	console.log("Back button clicked")
	ga("send", "event", "back", "click");
}

function searchFn(e) {

	var data = {};
	data["footer"] = dataFooter;

	var listings = data["footer"]['teach_education_listing'];
	var searchTerm = $("#search-text").val();
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
}
