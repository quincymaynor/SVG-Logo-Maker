const { Renderer } = require("../lib/Renderer.js");
const { Circle } = require("../lib/circle.js");

test('render circle', () => {
    const r = new Renderer(400, 300);
    const circle = new Circle(r, "#FFF", 50, 80);
    const renderedcircle = circle.render();
    expect(renderedcircle).toMatchSnapshot();
})