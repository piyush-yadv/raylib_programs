const r = require("raylib");

const window = {
    width: 400,
    height: 300,
    title: "Circle using Points",
    FPS: 60,
}

const point = { x: 200, y: 150, };

const smallCircle = { radius: 25, color: { r: 255, g: 0, b: 0, a: 150, }, }
const mediumCircle = { radius: 50, color: { r: 0, g: 255, b: 0, a: 200, }, }
const largeCircle = { radius: 75, color: { r: 0, g: 0, b: 255, a: 255, }, }

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
    r.DrawCircleV(point, largeCircle.radius, largeCircle.color);
    r.DrawCircleV(point, mediumCircle.radius, mediumCircle.color);
    r.DrawCircleV(point, smallCircle.radius, smallCircle.color);
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