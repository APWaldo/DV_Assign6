/**
 * @author Annie P Waldman
 */
//Console log to make sure that I know that this works.
console.log ("Hi there. About to make a pretty cool visualization about remittances.");





















//Adding my new function pageLoaded and console logging to make sure that the pageLoaded function activates on
//document ready. This will eventually load my google visualization of my remittances map.
function pageLoaded () {
	
	//console log checks to make sure that page loaded works.
	console.log ("Got to page loaded.");
	
	//Load the google visualization library with the callback googleLoaded. This will tell the browser to load the function
	//googleLoaded. This is using the google visualization script to work. But now I have to make sure that I have
	//my function googleLoaded working.
	google.load("visualization", "1", {packages:["corechart"], callback: "googleLoaded"});
	//now I have to define my function googleLoaded next.....	
	
}


//Adding my document ready to activate my pageLoaded function (which will activate the visualization).
$(document).ready(pageLoaded);


//Putting an end page console log just for double checking things.
console.log ("This is the end page console log. Just for double checking things.");