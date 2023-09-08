// const Component = require('./component.js');

// class Shape extends Component{
//   #color;
//   #renderer;

//   constructor(renderer, color) {
//       this.#color = color;
//       this.#renderer = renderer;
//   }

//   getColor() {
//       return this.#color;
//   }

//   getRenderer() {
//       return this.#renderer;
//   }

//   render() {
//       return `<img src="${this.#renderer.render()}" />`
//   }
// }

class Shape {
    constructor (shapeColor, textColor, textContent) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.textContent = textContent;
    }

}

class Circle extends Shape {
    render() {
        return `<svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill=${this.shapeColor}/>
        </svg>`
    }
}

class Triangle extends Shape {

}

class Square extends Shape {

}

const newCircle = new Circle("green", "")

module.exports = Shape;
