/**
 * @author Annie P Waldman
 */
//Console log to make sure that I know that this works.
console.log ("Hi there. About to make a pretty cool visualization about cell phones.");



//Instead of adding data from a static json file, I'm going to load it from a google fusion table. I really really hope
//that this works.
function googleLoaded(){
	//console logging it for good measure.
	console.log ("Google has loaded")
	
	//Time to load data with get function. This will tell my page to go and get this data set from my link.
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1sevSyWbei7h7H0B2qM2HyIZ0arPiODIw7Qa1_yaj&key=AIzaSyC_YvjF2i4ejxQorXr0ge-tvfwv4HQrQoA", dataLoaded, "json");

}


//Adding my new function pageLoaded and console logging to make sure that the pageLoaded function activates on
//document ready. This will eventually load my google visualization of my remittances map.
function pageLoaded () {
	
	//console log checks to make sure that page loaded works.
	console.log ("Got to page loaded.");
	
	//Load the google visualization library with the callback googleLoaded. This will tell the browser to load the function
	//googleLoaded. This is using the google visualization script to work. But now I have to make sure that I have
	//my function googleLoaded working.
	google.load("visualization", "1", {packages:["geochart"], callback: "googleLoaded"});
	//now I have to define my function googleLoaded next.....	
	
}


//Adding my document ready to activate my pageLoaded function (which will activate the visualization).
$(document).ready(pageLoaded);


//Putting an end page console log just for double checking things.
console.log ("This is the end page console log. Just for double checking things.");