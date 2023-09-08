const { Triangle } = require("../lib/triangle.js");

test('render triangle', () => {
    const expectedSVG = `<svg width="300" height="200">
    <polygon points="60,10 240,10 150,190" fill="black"/>
    <text x="150" y="100" fill="red">SVG</text>
    </svg>`

    expect(Triangle.render()).toBe(expectedSVG);
})