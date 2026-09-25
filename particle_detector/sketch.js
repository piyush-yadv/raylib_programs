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
const scannerWidth = WINDOW_WIDTH / 15;

const blueRangeX = WINDOW_WIDTH / 3;
const blueRangeWidth = WINDOW_WIDTH / 6;

function update() {

    const MAX_RANGE = WINDOW_WIDTH - scannerWidth;
    const MIN_RANGE = 0;

    scannerX = geometry.scannerUpdate(scannerX, MIN_RANGE, MAX_RANGE);
}


function drawScanner() {

    const scannerY = 0;
    const scannerHeight = WINDOW_HEIGHT;

    let scannerColor = r.WHITE;
    if (geometry.isOverlap(scannerX, scannerWidth, blueRangeX, blueRangeWidth)) {
        scannerColor = r.RED;
    }

    r.DrawRectangle(scannerX, scannerY, scannerWidth, scannerHeight, scannerColor);
}

function drawBlueParticleField() {

    const blueRangeY = 0;
    const blueRangeColor = r.BLUE;
    const blueRangeHeight = WINDOW_HEIGHT;

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