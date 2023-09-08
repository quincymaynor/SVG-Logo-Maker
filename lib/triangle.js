const { Shape } = require("./shape");

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200">
        <polygon points="60,10 240,10 150,190" fill=${this.shapeColor}/>
        <text x="150" y="100" fill=${this.textColor}>${this.textContent}</text>
        </svg>`
    }
}

module.exports = Triangle;
