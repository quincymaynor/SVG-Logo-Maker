const { Square } = require("../lib/square.js");

test('render square', () => {
    const Squ = new Square
    const expectedSVG = `<svg width="300" height="200">
    <rect x="150" y="100" width="180" height="180" fill="black"/>
    <text x="150" y="100" fill="red">SVG</text>
    </svg>`

    expect(Squ.render()).toBe(expectedSVG);
})