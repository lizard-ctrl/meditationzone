var c1, c2, c3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(133,118,222);
  c2 = color(164,92,212);
  
  setGradient(c1, c2);
}

function draw() {
  stroke(mouseX/5,167,281);
  ellipse(mouseX, mouseY, 80, 80);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
