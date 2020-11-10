/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
let x, y;

function setup() {
  createCanvas(720, 720);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(230,230,250);
  
  // Draw a circle
  stroke(139,131,134);
  fill(255,255,240);
  ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-20, 20);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

