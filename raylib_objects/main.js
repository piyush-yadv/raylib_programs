const s = require("./a_very_small_object");
// const s = require("./a_simple_target");
// const s = require("./circle_using_two_points");
// const s = require("./a_coloured_window");
// const s = require("./a_rounded_button");

function loop() {
    while (s.running()) {
        s.update();
        s.draw();
    }
}

function main() {
    s.setup();
    loop();
    s.teardown();
}

main();