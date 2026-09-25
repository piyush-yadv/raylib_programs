const r = require("raylib");
const geometry = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const WINDOW_WIDTH = 300;
const WINDOW_HEIGHT = 200;
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

function drawBlueParticleField() {

    const blueRangeX = WINDOW_WIDTH / 3;
    const blueRangeY = 0;
    const blueRangeWidth = WINDOW_WIDTH / 6;
    const blueRangeHeight = WINDOW_HEIGHT;
    const blueRangeColor = r.BLUE;

    r.DrawRectangle(blueRangeX, blueRangeY, blueRangeWidth, blueRangeHeight, blueRangeColor);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawBlueParticleField();
    drawScanner();

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