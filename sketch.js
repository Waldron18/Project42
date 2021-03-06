var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);

}

function draw() {
  background("black");  


  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12 ,0, 12, 0, 360);

  translate(width/2,height/2);
  rotate(-90);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  stroke(255, 0, 0);
  noFill();
  arc(0, 0, 300, 300, 0, scAngle);

  stroke(0, 255, 0);
  noFill();
  arc(0, 0, 280, 280, 0, mnAngle);

  stroke(0, 0, 255);
  noFill();
  arc(0, 0, 260, 260, 0, hrAngle);
  drawSprites();
}