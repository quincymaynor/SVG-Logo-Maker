const { Circle } = require("../lib/circle.js");

test('render circle', () => {
    const expectedSVG = `<svg width="300" height="200">
    <circle cx="150" cy="100" r="90" fill="black"/>
    <text x="150" y="100" fill="red">SVG</text>
    </svg>`

    expect(Circle.render()).toBe(expectedSVG);
})