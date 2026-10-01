const sketch = require("./sketch");

const window = { width: 400, height: 400, title: "Particle Detector", FPS: 60, };

function loop(world) {
    while (sketch.running()) {
        sketch.draw(world);
        sketch.update(world);
    }
}

function main() {
    const world = sketch.setup(window);
    loop(world);
    sketch.teardown();
}

main();