const { Renderer } = require("../lib/Renderer.js");
const { Square } = require("../lib/square.js");

test('render square', () => {
    const r = new Renderer(400, 300);
    const square = new Square(r, "#FFF", 50, 80);
    const renderedsquare = square.render();
    expect(renderedsquare).toMatchSnapshot();
})