const { Shape } = require("./shape");

class Square extends Shape {
    render() {
        return `<svg width="300" height="200">
        <rect x="150" y="100" width="180" height="180" fill=${this.shapeColor}/>
        <text x="150" y="100" fill=${this.textColor}>${this.textContent}</text>
        </svg>`
    }
}

module.exports = { Square };
