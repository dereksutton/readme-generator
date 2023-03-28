// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'What is the file path of the deployed screenshot?'
  },
  {
    type: 'input',
    name: 'url',
    message: 'What is the URL of your deployed application?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm install inquirer@8.2.4',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What is the terminal command to run the program?',
    default: 'node index.js',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating your README file...');
    writeToFile('./catch/README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();