const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {
  constructor() {
    this.title = '';

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
      });
  }
}

module.exports = CLI;
