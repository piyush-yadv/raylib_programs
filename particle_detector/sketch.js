const r = require('raylib');
const sc = require('./scanner');
const pt = require('./partical');
const ol = require('./overlap');

function running() {
    return !r.WindowShouldClose();
}

function setup(window) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.height, window.width, window.title);
    r.SetTargetFPS(window.FPS);

    let world;
    return world = {
        scanner1: sc.createScanner(0, 0, 20, window.height, 1, r.WHITE, window.width / 2 - 20),
        scanner2: sc.createScanner(window.width / 2, 0, 20, window.height, 2, r.WHITE, window.width - 20),
        scanner3: sc.createScanner(0, 0, window.width, 20, 3, r.WHITE, window.height - 20),
        partical1: pt.createPartical(150, 0, 50, window.height),
        partical2: pt.createPartical(300, 0, 30, window.height),
        partical3: pt.createPartical(0, 100, window.width, 30),
    }
}

function update(world) {
    world.scanner1.x += sc.updateVelocity(world.scanner1.x, world.scanner1);
    world.scanner2.x += sc.updateVelocity(world.scanner2.x, world.scanner2);
    world.scanner3.y += sc.updateVelocity(world.scanner3.y, world.scanner3);

    world.scanner1.color = ol.updateColor(world.scanner1, world.partical1, world.partical2);
    world.scanner2.color = ol.updateColor(world.scanner2, world.partical1, world.partical2);
    world.scanner3.color = ol.updateHorizontalColor(world.scanner3, world.partical3);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    pt.drawParticles(world.partical1);
    pt.drawParticles(world.partical2);
    pt.drawParticles(world.partical3);

    sc.drawScanners(world.scanner1);
    sc.drawScanners(world.scanner2);
    sc.drawScanners(world.scanner3);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = { running, setup, update, draw, teardown, };