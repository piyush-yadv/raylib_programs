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

const bigBlueRangeX = WINDOW_WIDTH / 3;
const bigBlueRangeWidth = WINDOW_WIDTH / 6;

const smallBlueRangeX = (WINDOW_WIDTH / 3) * 2;
const smallBlueRangeWidth = WINDOW_WIDTH / 60;

function update() {

    const MAX_RANGE = WINDOW_WIDTH - scannerWidth;
    const MIN_RANGE = 0;

    scannerX = geometry.scannerUpdate(scannerX, MIN_RANGE, MAX_RANGE);

}

function drawScanner() {

    const SCANNER_Y = 0;
    const SCANNER_HEIGHT = WINDOW_HEIGHT;

    const overlapFirst = geometry.isOverlap(scannerX, scannerWidth, bigBlueRangeX, bigBlueRangeWidth)
    const overlapSecond = geometry.isOverlap(scannerX, scannerWidth, smallBlueRangeX, smallBlueRangeWidth)


    let scannerColor = r.WHITE;
    if (overlapFirst || overlapSecond) {
        scannerColor = r.RED;
    }

    r.DrawRectangle(scannerX, SCANNER_Y, scannerWidth, SCANNER_HEIGHT, scannerColor);
}

function drawBlueParticleField() {

    const RANGE_Y = 0;
    const RANGE_COLOR = r.BLUE;
    const RANGE_HEIGHT = WINDOW_HEIGHT;

    r.DrawRectangle(bigBlueRangeX, RANGE_Y, bigBlueRangeWidth, RANGE_HEIGHT, RANGE_COLOR);
    r.DrawRectangle(smallBlueRangeX, RANGE_Y, smallBlueRangeWidth, RANGE_HEIGHT, RANGE_COLOR);
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