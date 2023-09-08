const inquirer = require('inquirer');
const { Renderer } = require("./renderer.js");
const { Shape } = require("./shapes.js");

class CLI {
  constructor() {
    const r = new Renderer(400, 300);
    const shapes = [];

    shapes.push(new Shape(r, "#FFF", 50, 80));
  }

  makeLogo() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter logo text',
        },
        {
          type: '',
          name: 'textColor',
          message: 'Choose a text color',
        },
        {
          type: '',
          name: 'shape',
          message: 'Choose a shape',
        },
        {
          type: '',
          name: 'shapeColor',
          message: 'Choose a shape color',
        },
      ])
      .then(({ text, textColor, shape, shapeColor }) => {
        // return writeFile(
        //   join(__dirname, '..', 'output', 'tasks.html'),
        //   createDocument(this.title, this.tasks)
        // );
      });
  }
}

module.exports = CLI;
