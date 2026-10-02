const r = require("raylib");

const windowWidth = 700;
const windowHeight = 500;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Center Rectangle");
  r.SetTargetFPS(50);
}

function coordinate(windowLength, rectLength) {
  return (windowLength - rectLength) / 2;
}

function draw() {
  const width = 400;
  const height = 300;
  const x = coordinate(windowWidth, width);
  const y = coordinate(windowHeight, height);

  r.BeginDrawing();
  r.ClearBackground(r.SKYBLUE);
  r.DrawRectangle(x, y, width, height, r.WHITE);
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
