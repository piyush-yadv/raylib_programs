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

const SCANNER_WIDTH = WINDOW_WIDTH / 15;

let firstScannerX = 0;
let secondScannerX = (WINDOW_WIDTH / 2);

const bigBlueRangeX = WINDOW_WIDTH / 3;
const bigBlueRangeWidth = WINDOW_WIDTH / 6;

const smallBlueRangeX = (WINDOW_WIDTH / 3) * 2;
const smallBlueRangeWidth = WINDOW_WIDTH / 60;

function update() {

    const firstScannerSpeed = 1;
    const firstScannerMinRange = 0;
    const firstScannerMaxRange = (WINDOW_WIDTH / 2) - SCANNER_WIDTH;

    const secondScannerSpeed = 2;
    const secondScannerMinRange = (WINDOW_WIDTH / 2);
    const secondScannerMaxRange = WINDOW_WIDTH - SCANNER_WIDTH;

    firstScannerX = geometry.firstScannerUpdate(firstScannerX, firstScannerMinRange, firstScannerMaxRange, firstScannerSpeed);
    secondScannerX = geometry.secondScannerUpdate(secondScannerX, secondScannerMinRange, secondScannerMaxRange, secondScannerSpeed);
}

function drawScanner() {

    const SCANNER_Y = 0;
    const SCANNER_HEIGHT = WINDOW_HEIGHT;

    const overlapFirst = geometry.isOverlap(firstScannerX, SCANNER_WIDTH, bigBlueRangeX, bigBlueRangeWidth)
    const overlapSecond = geometry.isOverlap(secondScannerX, SCANNER_WIDTH, smallBlueRangeX, smallBlueRangeWidth)


    let firstScannerColor = overlapFirst ? r.RED : r.WHITE;
    let secondScannerColor = overlapSecond ? r.RED : r.WHITE;

    r.DrawRectangle(firstScannerX, SCANNER_Y, SCANNER_WIDTH, SCANNER_HEIGHT, firstScannerColor);
    r.DrawRectangle(secondScannerX, SCANNER_Y, SCANNER_WIDTH, SCANNER_HEIGHT, secondScannerColor);
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