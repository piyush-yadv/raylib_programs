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

let verticalScannerY = 0;
const verticalScannerHeight = WINDOW_HEIGHT / 10;

const firstRangeX = WINDOW_WIDTH / 3;
const firstRangeWidth = WINDOW_WIDTH / 6;

const secondRangeX = WINDOW_WIDTH * 2 / 3;
const secondRangeWidth = WINDOW_WIDTH / 60;

const horizonRangeY = WINDOW_HEIGHT / 4 + 10;
const HorizonRangeHeight = WINDOW_HEIGHT / 10;

function updateScanners() {

    const firstScannerSpeed = 2;
    const firstScannerMinRange = 0;
    const firstScannerMaxRange = (WINDOW_WIDTH / 2) - SCANNER_WIDTH;

    const secondScannerSpeed = 1;
    const secondScannerMinRange = (WINDOW_WIDTH / 2);
    const secondScannerMaxRange = WINDOW_WIDTH - SCANNER_WIDTH;

    const verticalScannerSpeed = 1;
    const verticalScannerMinRange = 0;
    const verticalScannerMaxRange = WINDOW_HEIGHT - verticalScannerHeight;

    firstScannerX = geometry.firstScannerUpdate(firstScannerX, firstScannerMinRange, firstScannerMaxRange, firstScannerSpeed);
    secondScannerX = geometry.secondScannerUpdate(secondScannerX, secondScannerMinRange, secondScannerMaxRange, secondScannerSpeed);
    verticalScannerY = geometry.verticalScannerUpdate(verticalScannerY, verticalScannerMinRange, verticalScannerMaxRange, verticalScannerSpeed);
}

function drawScanners() {

    const SCANNER_Y = 0;
    const SCANNER_HEIGHT = WINDOW_HEIGHT;

    const VERTICAL_SCANNER_X = 0;
    const VERTICAL_SCANNER_WIDTH = WINDOW_WIDTH;

    const overlapFirst = geometry.isOverlap(firstScannerX, SCANNER_WIDTH, firstRangeX, firstRangeWidth) || geometry.isOverlap(firstScannerX, SCANNER_WIDTH, secondRangeX, secondRangeWidth);;
    const overlapSecond = geometry.isOverlap(secondScannerX, SCANNER_WIDTH, firstRangeX, firstRangeWidth) || geometry.isOverlap(secondScannerX, SCANNER_WIDTH, secondRangeX, secondRangeWidth);
    const overlapVertical = geometry.isOverlap(verticalScannerY, verticalScannerHeight, horizonRangeY, HorizonRangeHeight)

    let firstScannerColor = overlapFirst ? r.RED : r.WHITE;
    let secondScannerColor = overlapSecond ? r.RED : r.WHITE;
    let verticalScannerColor = overlapVertical ? r.RED : r.WHITE;;

    r.DrawRectangle(firstScannerX, SCANNER_Y, SCANNER_WIDTH, SCANNER_HEIGHT, firstScannerColor);
    r.DrawRectangle(secondScannerX, SCANNER_Y, SCANNER_WIDTH, SCANNER_HEIGHT, secondScannerColor);
    r.DrawRectangle(VERTICAL_SCANNER_X, verticalScannerY, VERTICAL_SCANNER_WIDTH, verticalScannerHeight, verticalScannerColor);

}

function drawParticleFields() {

    const RANGE_COLOR = r.BLUE;

    const RANGE_Y = 0;
    const RANGE_HEIGHT = WINDOW_HEIGHT;

    const HORIZON_RANGE_X = 0;
    const HORIZON_RANGE_WIDTH = WINDOW_WIDTH;

    r.DrawRectangle(firstRangeX, RANGE_Y, firstRangeWidth, RANGE_HEIGHT, RANGE_COLOR);
    r.DrawRectangle(secondRangeX, RANGE_Y, secondRangeWidth, RANGE_HEIGHT, RANGE_COLOR);
    r.DrawRectangle(HORIZON_RANGE_X, horizonRangeY, HORIZON_RANGE_WIDTH, HorizonRangeHeight, RANGE_COLOR);
}

function update() {
    updateScanners();
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawParticleFields();
    drawScanners();

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