// set svg and dimensions of chart

var svgWidth = 800;
var svgHeight = 500;

let chartMargin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

let width = svgWidth - chartMargin.left - chartMargin.right;
let height = svgHeight - chartMargin.top - chartMargin.bottom;

//append svg to scatter div

let svg = d3.select("#scatter")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight);

//append chart to scatter div



	//import the data to be parsed

	//parse data