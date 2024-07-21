const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer.prompt ([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hexadecimal number for the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hexadecimal number for the shape color:',
  },
]).then(answers => {
  let shape;
  switch (answers.shape) {
    case 'Circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'Triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'Square':
      shape = new Square(answers.shapeColor);
      break;
  }

  const svgContent = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>
  `;

  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});