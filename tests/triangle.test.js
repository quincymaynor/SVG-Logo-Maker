const SVG = require("../lib/svg");
const {Triangle} = require("../lib/shape");

test('render triangle', () => {
    const triangle = new Triangle();
    const svg = new SVG();
    triangle.setColor("orange");
    svg.setText("SVG", "pink");
    svg.setShape(triangle);
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="30,40 270,40 150,200" fill="orange"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">SVG</text></svg>`

    expect(svg.render()).toBe(expectedSVG);
})