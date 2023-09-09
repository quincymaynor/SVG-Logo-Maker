const Triangle = require("../lib/triangle");

test('render triangle', () => {
    const Tri = new Triangle
    const expectedSVG = `<svg width="300" height="200">
    <polygon points="60,10 240,10 150,190" fill="black"/>
    <text x="150" y="100" fill="red">SVG</text>
    </svg>`

    expect(Tri.render()).toBe(expectedSVG);
})