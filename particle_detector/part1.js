const r = require("raylib");
const geometry = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const WINDOW_WIDTH = 700;
const WINDOW_HEIGHT = 500;
const TITLE = "Particle Detector";
const FPS = 50;

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

let scannerX = 0;

function update() {

    const MAX_RANGE = WINDOW_WIDTH - (WINDOW_WIDTH / 15);
    const MIN_RANGE = 0;
    scannerX = geometry.scannerUpdate(scannerX, MIN_RANGE, MAX_RANGE);

}


function drawScanner() {

    const scannerY = 0;
    const scannerWidth = WINDOW_WIDTH / 15;
    const scannerHeight = WINDOW_HEIGHT;
    const scannerColor = r.WHITE;

    r.DrawRectangle(scannerX, scannerY, scannerWidth, scannerHeight, scannerColor);
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawScanner()

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