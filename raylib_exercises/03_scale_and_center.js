const r = require("raylib");

function setup() {
  const windowWidth = 700;
  const windowHeight = 500;

  r.InitWindow(windowWidth, windowHeight, "Flexible Rectangle in Rectangle");
  r.SetTargetFPS(50);
}

function innerCoordinate(outerLength, innerLength, outerCoordinate) {
  return outerCoordinate + (outerLength - innerLength) / 2;
}

function innerDimension(outerDimension, innerPercentage) {
  return outerDimension * innerPercentage;
}

function draw() {
  const outerX = 100;
  const outerY = 100;
  const outerWidth = 400;
  const outerHeight = 350;

  const innerPercentage = 0.45;
  const innerWidth = innerDimension(outerWidth, innerPercentage);
  const innerHeight = innerDimension(outerHeight, innerPercentage);
  const innerX = innerCoordinate(outerWidth, innerWidth, outerX);
  const innerY = innerCoordinate(outerHeight, innerHeight, outerY);

  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, r.WHITE);
  r.DrawRectangle(innerX, innerY, innerWidth, innerHeight, r.RED);
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    draw();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();