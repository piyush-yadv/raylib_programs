const r = require("raylib");

const WIDTH = 800;
const HEIGHT = 800;
const FPS = 50;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Playing with Raylib");
    r.SetTargetFPS(FPS);
}

let x = 0;
let y = 0;

let color = r.RED;

function update() {

    x = x + 1;
    y = y + 1;

    if (x > WIDTH * 0.25 && x < WIDTH * 0.5) {
        color = r.ORANGE;
    } else if (x > WIDTH * 0.5 && x < WIDTH * 0.75) {
        color = r.YELLOW;
    } else if (x > WIDTH * 0.75 && x < WIDTH) {
        color = r.GREEN;
    } else {
        color = r.RED;
    }

    if (x === WIDTH) x = -WIDTH * 0.05;
    if (y === HEIGHT) y = -HEIGHT * 0.05;
}

function Draw() {

    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, 50, 50, color);
    r.DrawLine(0, WIDTH * 0.25, WIDTH, WIDTH * 0.25, r.ORANGE);
    r.DrawLine(0, WIDTH * 0.5, WIDTH, WIDTH * 0.5, r.YELLOW);
    r.DrawLine(0, WIDTH * 0.75, WIDTH, WIDTH * 0.75, r.GREEN);

}

function loop() {
    while (!r.WindowShouldClose()) {
        r.BeginDrawing();
        Draw();
        update();
        r.EndDrawing();
    }
}

function main() {
    setup();
    loop();
    r.closeWindow();
}

main();