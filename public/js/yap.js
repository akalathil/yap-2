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
}
function login(e) {
	// Prevent following the link
	e.preventDefault();

	console.log("CLICKED")
    console.log(document.location.href)
    var currURL = document.location.href;
    document.location.href = currURL+'home';
}
