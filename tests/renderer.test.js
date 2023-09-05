const { Renderer } = require("../lib/Renderer.js");

test('check color', () => {
    const color = "white";

    const ren = new Renderer(800, 600);
    ren.setFillStyle(color);

    expect(ren.getFillStyle()).toBe("#ffffff");
});
