var btn_red
var btn_green

var r = 0 
var g = 0
var b = 0

// to load images 



// create sprite, create button, create element, velocity, shape color, animation, scale, createEdgeSprites
function setup()
{
 //creating an output screen 
 createCanvas(400,400)
 btn_red = createButton("red button")
 btn_red.position(100,50)
btn_red.mousePressed(red_bg)
 btn_green = createButton("green button")
 btn_green.position(200,50)
}

 function draw()
 {
background(r,g,b) 
 }
 // creating a function for red color 
 function red_bg()
 {
   r = 255 
   g = 0 
   b = 0
 }

//creating a function for green color
function green_bg()
{
  r = 0 
  g = 255
  b = 0
}