# d3-tutorial


### CMU Tech4Society (inital workshop)
http://www.tech4society.group/

## Vector vs. raster graphics

![](http://www.apogeesigns.com/wp-content/uploads/2015/05/vector_raster.gif)

#### Vector Graphics
- Graphics calculated  mathematically using points,  lines, shapes
- Resolution independent;  infinitely scalable
- Best for illustrations,  diagrams, document  layouts, fonts, animations,  other line-based graphics
- Typical editing tools: Adobe  Illustrator, Flash

#### Raster Graphics
- Graphics described by  pixels filling a grid/matrix
- Defined resolution;  scaling causes aliasing or  blurring
- Best for photographs,  videos, other high-detail  graphics
- Typical editing tool:  Adobe Photoshop

## SVG
- Scalable Vector Graphics
- XML-based image format supported by all major  browsers; no plug-ins needed
- Primarily used for vector graphics
- Uses DOM elements to define paths, shapes,  text, etc. and CSS or JavaScript to style and  animate them
- Version 1.0 approved by W3C in 2001

#### Elements
- rect
- circle
- ellipse
- line
- polyline
- polygon
- text

#### Properties
- fill
- fill-opacity
- stroke
- stroke-width
- kerning

### SVG Styling
#### Via attributes

~~~~
<circle cx="25" cy="25" r="22" fill="yellow" stroke="orange" stroke-width="5" />
~~~~
#### Via CSS
~~~~
<circle cx="25" cy="25" r="22" style="stroke: #000000; fill: #00ff00;" />
~~~~

### SVG animation

#### Via <animate> element; change horizontal  position
~~~~
<circle id="my-circle" r="30" cx="50" cy="50"  fill="orange" />
<animate
  xlink:href="#my-circle"
  attributeName="cx"  
  from="50"
  to="450"
  dur="1s"
  begin="click" 
  fill="freeze" />
~~~~

#### Via CSS
~~~~
<circle id="my-circle" r="30" cx="50" cy="50"  fill="orange" />
<style>
  #my-circle{
    transition: 2s;
  }

  #my-circle:hover{
    fill: blue;
    r:50
  }
</style>
~~~~
