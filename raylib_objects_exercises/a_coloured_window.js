const r = require("raylib");

const window = { width: 400, height: 400, title: "A coloured window", FPS: 60, };

const rectangle = { x: 10, y: 10, width: 100, height: 100, };
const colorRED = { r: 255, g: 0, b: 0, a: 150 };

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.width, window.height, window.title);
    r.SetTargetFPS(window.FPS);
}
function update() {
    //update
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleRec(rectangle, colorRED);
    r.DrawRectangleLines(rectangle.x, rectangle.y, rectangle.width, rectangle.height, r.WHITE);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown, w
};