const r = require("raylib");

const window = {
    width: 400,
    height: 300,
    title: "Circle using Points",
    FPS: 60,
}

const startPoint = { x: 100, y: 100, };
const endPoint = { x: 300, y: 100, };
const radius = 25;
const circleColor = r.RED;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.width, window.height, window.title);
    r.SetTargetFPS(window.FPS);
}

function update() {
    // update
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircle(startPoint.x, startPoint.y, radius, circleColor);
    r.DrawCircle(endPoint.x, endPoint.y, radius, circleColor);
    r.DrawLineV(startPoint, endPoint, r.WHITE);
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
}