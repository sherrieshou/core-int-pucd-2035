/*
 * @name Multiple Lights
 * @description All types of lights could be used in one sketch.
 */
function setup() {
  createCanvas(710, 710, WEBGL);
}

function draw() {
  background(187,255,255);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(200);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(100, 0, 255, locX, locY, 250);

  push();
  translate(-width / 6, 0, 0);
  rotateZ(frameCount * 0.05);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100);
  pop();

  translate(width / 6, 0, 0);
  ambientMaterial(250);
  sphere(150, 70);
}
