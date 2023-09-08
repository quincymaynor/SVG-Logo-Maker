const { Shape } = require("./shapes");

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="90" fill=${this.shapeColor}/>
        <text x="150" y="100" fill=${this.textColor}>${this.textContent}</text>
        </svg>`
    }
}

module.exports = { Circle };
