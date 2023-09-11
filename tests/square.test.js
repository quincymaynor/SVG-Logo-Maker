const SVG = require("../lib/svg");
const { Square } = require("../lib/shape");

test('render square', () => {
    const square = new Square();
    const svg = new SVG();
    square.setColor("gray");
    svg.setText("SVG", "blue");
    svg.setShape(square);
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="10" width="180" height="180" fill="gray"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text></svg>`

    expect(svg.render()).toBe(expectedSVG);
})