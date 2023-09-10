const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shape");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");

class CLI {
  makeLogo() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Enter logo text",
        },
        {
          type: "input",
          name: "textColor",
          message: "Choose a text color",
        },
        {
          type: "list",
          name: "shapeChoice",
          message: "Choose a shape",
          choices: ["circle", "square", "triangle"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Choose a shape color",
        },
      ])
      .then(({shapeChoice, shapeColor, text, textColor}) => {
        let shape;
        switch (shapeChoice) {
          case "circle":
            shape = new Circle();
            break;
          case "square":
            shape = new Square();
            break;
          case "triangle":
            shape = new Triangle();
            break;
        }


        shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);

        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
      });
  }
}

module.exports = CLI;
