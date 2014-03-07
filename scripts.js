/**
 * @author Annie P Waldman
 */


/*
 * Outline for how to build the google data visualization with google fusion tables.
 * 1. Load jquery script in the index.
 * 2. Load google visualization liberary in the index and load in scripts with a callback.
 * 3. Load my own scripts file ("scripts.js").
 * 4. Console log in my own scripts file to make sure that it all works.
 * 5. Insert the document ready jquery function at the bottom of the scripts. This will load once the rest of my functions
 * have been defined above it.
 * 6. Create a function that activates docuemnt ready, in this case I've called it pageLoaded, and it calls up my function
 * for data as well as the visualization that I've built
 * 7. Create a function to call the jQuery function to get my data. In this case I link it to the google fusion table,
 * making sure to put in my own API key.
 * 8. Create a function that loads my data into the function that calls up the google visualization geo chart. This step
 * feeds my data to the visualization. It also specifies the chart options to decorate my chard.
 */




//Console log to make sure that I know that this works.
console.log ("Hi there. About to make a pretty cool visualization about cell phones.");

//This function will make magic with the dataset that I pointed to in googleLoaded. Gave the function a short hand name
//of remit to work with.
function dataLoaded(CELL) {
	
	//Console log that the data has loaded just to double check. Put the name of the data UNRATE just to check.
	console.log (CELL);
	
	var gCellTable = new google.visualization.DataTable();
		
	//When adding columns, the first parameter is the datatype in that column.
	//The second parameter is the name of the column.
	
	gCellTable.addColumn('string', CELL.columns[0]);
	
	gCellTable.addColumn('number', CELL.columns[1]);

	//Now that we have the headers, lets add some rows.
	
	gCellTable.addRows(CELL.rows)
	console.log(gCellTable);
	//Create options object to add fanciness to the chart, like a title.
	var chartOptions = {
		colorAxis : {
			maxValue : 200,
			colors : ['#fff', '#339999']
		},
		width : 900,
		keepAspectRatio : true,
		forceIFrame : true,
		backgroundColor : {
			stroke : '#000',
			strokeWidth : 4
		}
	};

	
//Now I tell it to create a line chart and give it a div that matches the index.html, meaning I should now go back and create
//that div in my index. 
	var cellChart = new google.visualization.GeoChart(document.getElementById('myCellChartDiv'));
//Telling it to draw it using my data and using my options! Finished! So exciting!
    cellChart.draw(gCellTable, chartOptions);
}



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