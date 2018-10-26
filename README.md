# d3-tutorial

#### Data Dojo
<div>
<img src="https://doc-0g-7c-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/gb6o0rc4lhq021lr97h5fsl8qnra5ust/1540562400000/17668014132759662909/*/0B4xUJa9N9h_6OEdWWnQ0R0NhVUE?e=view" width="200">
</div>

#### CMU Tech4Society (inital workshop inspired by)
http://www.tech4society.group/
<div>
<img src="http://www.tech4society.group/wp-content/uploads/2017/09/logo.png" width="150">
</div>

#### Data from WPRDC
http://www.wprdc.org/
<div>
<img src="http://www.wprdc.org/wp-content/themes/wprdc-redesign/assets/images/plain_logo_rbg_cropped.svg" width="250">
</div>

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
- path
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
