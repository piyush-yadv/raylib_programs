const r = require("raylib");

function setup() {
  const windowHeight = 600;
  const windowWidth = 800;

  r.InitWindow(windowWidth, windowHeight, "Find the closer target");
  r.SetTargetFPS(50);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function square(x) {
  return x ** 2;
}

function squareRoot(x) {
  return x ** 0.5;
}

function calculateDistance(x1, y1, x2, y2) {
  return squareRoot(add(square(subtract(x1, x2)), square(subtract(y1, y2))));
}

function draw() {
  const sourceX = 100;
  const sourceY = 100;
  const sourceRadius = 35;

  const firstX = 300;
  const firstY = 450;
  const firstRadius = 25;

  const secondX = 600;
  const secondY = 500;
  const secondRadius = 25;

  let destinationX;
  let destinationY;

  if (calculateDistance(sourceX, sourceY, firstX, firstY) <= calculateDistance(sourceX, sourceY, secondX, secondY)) {
    destinationX = firstX;
    destinationY = firstY;

  } else {
    destinationX = secondX;
    destinationY = secondY;
  }

  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawCircle(sourceX, sourceY, sourceRadius, r.GREEN);
  r.DrawCircle(firstX, firstY, firstRadius, r.RED);
  r.DrawCircle(secondX, secondY, secondRadius, r.BLUE);
  r.DrawLine(sourceX, sourceY, destinationX, destinationY, r.BLACK);
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