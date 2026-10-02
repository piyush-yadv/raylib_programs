const r = require("raylib");

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 50;

const RADIUS1 = 25;
const RADIUS2 = 45;

const x1 = WIDTH * 0.25;
const y1 = HEIGHT * 0.5;

const x2 = WIDTH * 0.60;
const y2 = HEIGHT * 0.5;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Intersecting Circles");
    r.SetTargetFPS(FPS);
}

function sqr(x) {
    return x * x;
}

function calcCenterDistance(x1, y1, x2, y2) {
    return (sqr(x2 - x1) + sqr(y2 - y1)) ** 0.5;
}

function checkOverlap(x1, y1, x2, y2) {
    return calcCenterDistance(x1, y1, x2, y2) <= (RADIUS1 + RADIUS2);
}

function draw() {

    const isOverlap = checkOverlap(x1, y1, x2, y2);

    let COLOR = r.BLACK;
    if (isOverlap) {
        COLOR = r.RED;
    }

    r.ClearBackground(r.WHITE);
    r.DrawCircle(x1, y1, RADIUS1, COLOR);
    r.DrawCircle(x2, y2, RADIUS2, COLOR);
}

function loop() {
    while (!r.WindowShouldClose()) {

        r.BeginDrawing();
        draw();
        r.EndDrawing();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();