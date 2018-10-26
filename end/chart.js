$(document).ready(function(){
  var data = [478, 662, 546, 384, 202, 117, 132, 175, 327, 476, 520, 526, 543, 651, 479, 572, 749, 806,
    806, 743, 722, 639, 474, 419];

  var maxArrests = d3.max(data);
  var svg = d3.select('svg')
              .attr('height', '500px')
              .attr('width','800px');
  var groups = svg.selectAll('g')
              .data(data)
              .enter()
              .append('g')
              .on('mouseover', function(d,i){
                  var g = d3.select(this);
                  g.select('rect')
                  .attr('stroke-width', 0)
                  .attr('stroke', "black")
                  .transition()
                  .duration(300)
                  .attr('stroke-width', 3)

                  g.select('text')
                  .transition()
                  .duration(300)
                  .attr('y', (d,i) => 450 - d/maxArrests*400 - 25)
                  .attr('font-size', '22px')
              })
              .on('mouseout', function(d,i){
                  var g = d3.select(this);
                  g.select('rect')
                  .transition()
                  .duration(500)
                  .attr('stroke-width', 0);

                  g.select('text')
                  .transition()
                  .duration(300)
                  .attr('y', (d,i) => 450 - d/maxArrests*400 +5)
                  .attr('font-size', '12px')
              });  //<g> is a svg tag for group of elements
  groups.append('rect')
        .attr('x', (d,i) => 20+i*32)
        .attr('y', 450)
        .transition()
        .delay(function(d, i){
          return i * 100;
        })
        .attr('y', (d,i) => 450 - d/maxArrests*400)
        .attr('height', (d,i) => d/maxArrests*400)
        .attr('width', '25px')
        .attr('fill', (d,i) => d3.interpolatePiYG(d/maxArrests));
  groups.append('text')
        .text(function (d, i){return d;})
        .attr('x', function(d,i){return 20+i*32+25/2;})
        .transition()
        .delay(function(d, i){
          return i * 100;
        })
        .attr('y',(d,i) => 450 - d/maxArrests*400 + 5)
        .attr('text-anchor','middle')
        .attr('dominant-baseline','hanging')
        .attr('fill','black')
        .attr('font-family', 'verdana')
        .attr('font-size', '10px');
  groups.append('text')
        .text(function (d, i){return i;})
        .attr('x', function(d,i){return 20+i*32+25/2;})
        .attr('y',(d,i) => 455)
        .attr('text-anchor','middle')
        .attr('dominant-baseline','hanging')
        .attr('fill','black')
        .attr('font-family', 'verdana')
        .attr('font-size', '10px');
});
