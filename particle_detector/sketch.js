const r = require('raylib');
const g = require('./geometry');

const WINDOW_WIDTH = 400;
const WINDOW_HEIGHT = 400;
const TITLE = 'particle detector';
const FPS = 60;

let scanner1X = 0;
const scanner1Width = 20;
let scanner1Velocity = 1;
let scanner1Color = r.WHITE;
const scanner1MinLen = 0;
const scanner1MaxLen = WINDOW_WIDTH / 2 - scanner1Width;

let scanner2X = WINDOW_WIDTH / 2;
const scanner2Width = 20;
let scanner2Velocity = 2;
let scanner2Color = r.WHITE;
const scanner2MinLen = WINDOW_WIDTH / 2;
const scanner2MaxLen = WINDOW_WIDTH - scanner2Width;

let scanner3Y = 0;
const scanner3Height = 20;
let scanner3Color = r.WHITE;
let scanner3Velocity = 1;
const scanner3MinLen = 0;
const scanner3MaxLen = WINDOW_HEIGHT;

const partical1_X = 150;
const partical1_Width = 50;

const partical2_X = 300;
const partical2_Width = 30;

const partical3_Y = 100;
const partical3_height = 30;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WINDOW_HEIGHT, WINDOW_WIDTH, TITLE);
    r.SetTargetFPS(FPS);
}

function updateScannerVelocity() {

    scanner1X += scanner1Velocity;
    if (g.scannerOutOfBounds(scanner1X, scanner1MinLen, scanner1MaxLen)) scanner1Velocity = -scanner1Velocity;

    scanner2X += scanner2Velocity;
    if (g.scannerOutOfBounds(scanner2X, scanner2MinLen, scanner2MaxLen)) scanner2Velocity = -scanner2Velocity;

    scanner3Y += scanner3Velocity;
    if (g.scannerOutOfBounds(scanner3Y, scanner3MinLen, scanner3MaxLen)) scanner3Velocity = -scanner3Velocity;
}

function updateScannerColor() {

    scanner1Color = g.isOverlap(scanner1X, scanner1Width, partical1_X, partical1_Width) ||
        g.isOverlap(scanner1X, scanner1Width, partical2_X, partical2_Width) ? r.RED : r.WHITE;

    scanner2Color = g.isOverlap(scanner2X, scanner2Width, partical1_X, partical1_Width) ||
        g.isOverlap(scanner2X, scanner2Width, partical2_X, partical2_Width) ? r.RED : r.WHITE;

    scanner3Color = g.isOverlap(scanner3Y, scanner3Height, partical3_Y, partical3_height) ? r.RED : r.WHITE;
}

function drawRanges(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function drawScanners() {

    drawRanges(scanner1X, 0, scanner1Width, WINDOW_HEIGHT, scanner1Color);
    drawRanges(scanner2X, 0, scanner2Width, WINDOW_HEIGHT, scanner2Color);
    drawRanges(0, scanner3Y, WINDOW_WIDTH, scanner3Height, scanner3Color);
}

function drawParticles() {

    const particalColor = r.SKYBLUE;
    drawRanges(partical1_X, 0, partical1_Width, WINDOW_HEIGHT, particalColor);
    drawRanges(partical2_X, 0, partical2_Width, WINDOW_HEIGHT, particalColor);
    drawRanges(0, partical3_Y, WINDOW_WIDTH, partical3_height, particalColor);
}

function update() {

    updateScannerVelocity();
    updateScannerColor();
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawParticles();
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
}