const { Renderer } = require("../lib/Renderer.js");
const { Triangle } = require("../lib/triangle.js");

test('render triangle', () => {
    const r = new Renderer(400, 300);
    const triangle = new Triangle(r, "#FFF", 50, 80);
    const renderedtriangle = triangle.render();
    expect(renderedtriangle).toMatchSnapshot();
})