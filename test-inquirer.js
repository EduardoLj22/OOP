// test-inquirer.js
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'test',
    message: 'This is a test prompt. Type something:',
  },
]).then(answers => {
  console.log('You typed:', answers.test);
});