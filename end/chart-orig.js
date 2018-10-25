$(document).ready(function(){
  renderChart();
});

function renderChart(){
  var data = [478, 662, 546, 384, 202, 117, 132, 175, 327, 476, 520, 526, 543, 651, 479, 572, 749, 806,
    806, 743, 722, 639, 474, 419];
  var maxArrests = d3.max(data);
  var svg = d3.select('svg')
              .attr("height", "400px")
              .attr("width", "500px")
              .attr("transform", "translate(0, 400)")
              .attr("transform", "scale(1,-1)");
  
  //D3 selections are a group of elements that match a query or 
  //could match a query later

  var groups = svg.selectAll('g')
                  .data(data)
                  .enter()
                  .append('g');
  
  groups.append('rect')
        .attr('x', (d, i) =>  i * 25)
        .attr('y', (d, i) => 0)
        .attr('height', (d, i) => d * .4)
        .attr('width', (d, i) => 15);

  
}

function doTheJSThing(){
  console.log('hello');
  var ele = document.querySelector("#title");
  ele.style.opacity = '1';
  var className = 'animate';
  if (ele.classList)
    ele.classList.add(className);
  else
    ele.className += ' ' + className;

}