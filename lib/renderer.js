const { createCanvas } = require("canvas");

class Renderer {
    #width = 800;
    #height = 600;
    #ctx;
    #canvas;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
        this.#canvas = createCanvas(width, height);
        this.#ctx = this.#canvas.getContext("2d")
    }

    setFillStyle(color) {
        this.#ctx.fillStyle = color;
    }

    getFillStyle() {
        return this.#ctx.fillStyle;
    }

    getContext() {
        return this.#ctx;
    }

    render() {
        return this.#canvas.toDataURL();
    }
}

module.exports = { Renderer };
