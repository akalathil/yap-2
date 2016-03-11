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
	$(".fa-pencil-square-o").click(editProfile);
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

function editProfile(e) {
	e.preventDefault();
	$(".fa-pencil-square-o").attr("contentEditable", "true");

}

function searchFn(e) {
	$('.search-form').submit();
	// var searchTerm = $("#search-text").val();
	// console.log("YAP.js Search Term is: ")
	// console.log(searchTerm)
}
