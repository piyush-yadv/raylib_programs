const r = require("raylib");

const window = { width: 400, height: 400, title: "A rounded button", FPS: 60, };

const rect = { x: 100, y: 100, width: 100, height: 100, };

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.width, window.height, window.title);
    r.SetTargetFPS(window.FPS);
}

function update() {
    // Update
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleRounded(rect, 0.5, 0, r.RED);
    r.DrawRectangleRoundedLines(rect, 0.5, 0, 8, r.WHITE);
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