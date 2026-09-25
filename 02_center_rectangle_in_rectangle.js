const r = require("raylib");

function setup() {
  const windwowWidth = 700;
  const windowHeight = 500;

  r.InitWindow(windwowWidth, windowHeight, "Rectangle in Rectangle");
  r.SetTargetFPS(50);
}

function coordinate(outerLength, innerLength, outerCoordinate) {
  return outerCoordinate + (outerLength - innerLength) / 2;
}

function draw() {
  const outerX = 100;
  const outerY = 100;
  const outerWidth = 500;
  const outerHeight = 350;

  const innerWidth = 300;
  const innerHeigth = 200;
  const innerX = coordinate(outerWidth, innerWidth, outerX);
  const innerY = coordinate(outerHeight, innerHeigth, outerY);

  r.BeginDrawing();
  r.ClearBackground(r.BLUE);
  r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, r.WHITE);
  r.DrawRectangle(innerX, innerY, innerWidth, innerHeigth, r.RED);
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
