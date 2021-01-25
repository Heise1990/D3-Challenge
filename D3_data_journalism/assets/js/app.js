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

let chartGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

	//import the data

d3.csv("data.csv").then(function(chartData){

// Cast string data as a number using the unary + operator

chartData.forEach(function(stringData){

	stringData.poverty = +stringData.poverty;
	stringData.healthcare = +stringData.healthcare;
});

// hard-code scales

let xLinearScale = d3.scaleLinear()
	.domain([0, 30])
	.range([0,width]);

let yLinearScale = d3.scaleLinear()
	.domain([0, 30])
	.range([height, 0]);

// create axes

let yAxis = d3.axisLeft(yLinearScale);
let xAxis = d3.axisBottom(xLinearScale);

// set y to the y axis and x to the bottom of the chart

chartGroup.append("g")
.call(yAxis);

chartGroup.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

  // add circles to chart
    let circlesGroup = chartGroup.selectAll("circle")
        .data(chartData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.healthcare))
        .attr("r", "10")
        .attr("fill", "lightgreen")
        .attr("opacity", ".5");

});

// // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - chartMargin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Lacks Healthcare (%)");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + chartMargin.top + 30})`)
      .attr("class", "axisText")
      .text("In Poverty (%)")
  	  .catch(function(error) {
    console.log(error)
  });