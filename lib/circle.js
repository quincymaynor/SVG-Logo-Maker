const { Shape } = require("./shapes");

class Circle extends Shape {
    #width;
    #height;

    constructor(renderer, color, width, height) {
        super(renderer, color);
        this.#width = width;
        this.#height = height;
    }

    getWidth() {
        return this.#width;
    }

    getHeight() {
        return this.#height;
    }

    render() {
        const renderer = this.getRenderer();
        const ctx = renderer.getContext();
        renderer.setFillStyle(this.getColor());
        ctx.fillRect(0, 0, this.#width, this.#height);
        ctx.fill();
        return super.render();
    }
}

module.exports = { Circle };
