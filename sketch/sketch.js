let s;
let img;
let markerSize = 0.35;
let isFullScreen = false;

function preload() {
  img = loadImage("./img.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);

  s = min(width, height);
  noFill();
  stroke(255, 50, 0);

  background(0);
  iOSfullscreen();
}

function draw() {
  push();
  background(0, 30);
  strokeWeight(s * 0.015);

  // 外枠
  circle(width / 2, height / 2, s * 0.75);
  circle(width / 2, height / 2, s * 0.9);

  // 動く小さな円
  for (let i = 0; i < 12; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(frameCount);
    circle(s * 0.415 * cos(i * 30), s * 0.415 * sin(i * 30), s * 0.05);
    pop();
  }

  // 回転する正方形
  push();
  translate(width / 2, height / 2);
  rotate(frameCount);
  square(0, 0, s * 0.525);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(-frameCount);
  square(0, 0, s * 0.525);
  pop();

  square(width / 2, height / 2, s * (markerSize + 0.01));

  // filter(BLUR, 3);

  pop();

  // ARマーカー
  push();
  image(
    img,
    width / 2 - (s * markerSize) / 2,
    height / 2 - (s * markerSize) / 2,
    s * markerSize,
    s * markerSize
  );
  pop();
}

function mouseClicked() {
  if (!isFullScreen) {
    fullscreen(true);
  } else {
    fullscreen(false);
  }

  isFullScreen = !isFullScreen;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
