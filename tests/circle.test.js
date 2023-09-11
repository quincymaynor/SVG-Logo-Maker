const SVG = require("../lib/svg");
const { Circle } = require("../lib/shape");

test('render circle', () => {
    const circle = new Circle();
    const svg = new SVG();
    circle.setColor("green");
    svg.setText("SVG", "white");
    svg.setShape(circle);
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`

    expect(svg.render()).toBe(expectedSVG);
})