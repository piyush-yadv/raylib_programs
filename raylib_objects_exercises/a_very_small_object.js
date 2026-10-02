const r = require("raylib");

const window = { width: 400, height: 400, title: "A coloured window", FPS: 60, };

const window1 = {
    position: { x: 100, y: 100, },
    size: { x: 100, y: 100, },
    color: { r: 255, g: 0, b: 0, a: 200, },
}

const window2 = {
    position: { x: 200, y: 100, },
    size: { x: 100, y: 100, },
    color: { r: 0, g: 255, b: 0, a: 200, },
}

const window3 = {
    position: { x: 100, y: 200, },
    size: { x: 100, y: 100, },
    color: { r: 0, g: 0, b: 255, a: 200, },
}
const window4 = {
    position: { x: 200, y: 200, },
    size: { x: 100, y: 100, },
    color: { r: 255, g: 200, b: 50, a: 200, },
}

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
    r.ClearBackground(r.WHITE);
    r.DrawRectangleV(window1.position, window1.size, window1.color);
    r.DrawRectangleV(window2.position, window2.size, window2.color);
    r.DrawRectangleV(window3.position, window3.size, window3.color);
    r.DrawRectangleV(window4.position, window4.size, window4.color);
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
    teardown,
};