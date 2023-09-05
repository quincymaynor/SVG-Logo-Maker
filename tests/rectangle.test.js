const { Renderer } = require("../lib/Renderer.js");
const { Rectangle } = require("../components/Rectangle.js");

test('render rectangle', () => {
    const r = new Renderer(400, 300);
    const rectangle = new Rectangle(r, "#FFF", 50, 80);
    const renderedRectangle = rectangle.render();
    expect(renderedRectangle).toMatchSnapshot();
})