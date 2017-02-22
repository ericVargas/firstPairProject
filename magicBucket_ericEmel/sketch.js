function setup() {                                  // Eric is typing and Emel is driving
  createCanvas(600, 600);                           // canvas size
  background("grey");                               // canvas color
}

function draw() {
  stroke(color("black"));                           // coloring the wand
  strokeWeight(3);                                  // sizing the thickness
  line(300, 300, 500, 450);                         // positioning the wand
  
  
  {stroke(color("yellow"));                         // coloring the following shapes yellow
  point(290, 290);                                  // creating sparks from the wand until line 21
  point(293, 305);
  point(295, 302);
  point(298, 310);
  point(299, 308);
  point(296, 303);
  point(200, 20);
  point(100, 50);
  point(150, 70);
  }
  fill("yellow");                                   // coloring our bucket of magic
arc(200, 350, 150, 150, 0, PI+QUARTER_PI, OPEN);    // positioning and sizing our bucket of magic
}