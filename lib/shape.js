class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `
        <circle cx="150" cy="100" r="90" fill="${this.color}"/>
        `;
  }
}

class Square extends Shape {
  render() {
    return `
        <rect x="60" y="10" width="180" height="180" fill="${this.color}"/>
        `;
  }
}

class Triangle extends Shape {
  render() {
    return `
        <polygon points="30,40 270,40 150,200" fill="${this.color}"/>
        `;
  }
}

module.exports = { Circle, Square, Triangle };
