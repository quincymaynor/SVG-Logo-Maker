const Component = require('./component.js');

class Shape extends Component{
  #color;
  #renderer;

  constructor(renderer, color) {
      this.#color = color;
      this.#renderer = renderer;
  }

  getColor() {
      return this.#color;
  }

  getRenderer() {
      return this.#renderer;
  }

  render() {
      return `<img src="${this.#renderer.render()}" />`
  }
}

module.exports = Shape;
