window.onload = function () {	
    displayData();   
}

function displayData(){
		var timeline_obj = $('#my-data').data();
		var timeline_data = Object.values(timeline_obj['name']);		
		console.log("got data");
        console.log(timeline_data);
		//$('#imageDiv').hide();
		throwTable(timeline_data);
		throwChart(timeline_data);
       
}

function throwTable(timeline_data){
	console.log("inside throw table");
	var timeline = timeline_data;
	var tbody = document.getElementById('tbody');
	for (var i = 0; i < timeline.length; i++) {
    	var tr = "<tr>";
    	tr += "<td>" + moment(timeline[i].x).format("YYYY MMM DD HH:mm:ss.SSS") + "</td>" + "<td>" + timeline[i].z.toString() + "</td></tr>";
		tbody.innerHTML += tr;
}
}

function throwChart(TimelineData){
	console.log("inside throw chart");
    var chartData = TimelineData;
    var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	backgroundColor: "#DCDCDC",	
	zoomEnabled: true,
	title:{
		text: ""
	},
	subtitles:[
		{
			text: "1-Video",			
			horizontalAlign: "left",
			fontStyle: "normal",
			//fontColor: "blue",
			fontFamily: "arial",
			
		},
		{
			text: "2-Notifications",			
			horizontalAlign: "left",
			fontStyle: "normal",
			//fontColor: "blue",
			fontFamily: "arial",
			
		},
		{
			text: "3-Settings",			
			horizontalAlign: "left",
			fontStyle: "normal",
			//fontColor: "blue",
			fontFamily: "arial",
			
		},
		{
			text: "4-Keypresses",			
			horizontalAlign: "left",
			fontStyle: "normal",
			//fontColor: "blue",
			fontFamily: "arial",
			
		}
	
		],
	axisX: {
		title:"Time",
		labelAngle: -30
	},
	axisY:{
		title: "Timelines",
		interval: 1
	},
	data: [{
		type: "scatter",		
		color: "red",
		toolTipContent: "{z} ",
		name: "      ",		
        showInLegend: true,
        xValueType: "dateTime",
		dataPoints: chartData,
		
	}
	]
});
chart.render();
}


