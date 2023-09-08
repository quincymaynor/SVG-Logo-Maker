const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {

  makeLogo() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape',
          choices: ['circle', 'square', 'triangle'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Choose a shape color',
        },
        {
          type: 'input',
          name: 'text',
          message: 'Enter logo text',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Choose a text color',
        },
      ])
      .then(() => {
        // return writeFile(
        //   join(__dirname, '..', 'output', 'Generated logo.svg'),
        //   createDocument(this.shape, this.shapeColor, this.text, this.textColor)
        // );
      })
      .then(() => console.log('Created Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
