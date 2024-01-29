// TODO: Include packages needed for this application
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    { 
        type: "input",
        name: "email",
        message: 'What is email?',
     },
    { 
       type: "input",
       name: "title",
       message: 'What is the title of your project?',
    },
    { 
       type: 'input',
       name: "description",
       message: 'What is a description of your project?'
    },
    { 
        type: 'input',
        name: 'instructions',
        message: 'What are the instructions to use the project?'
    },
    { 
        type: 'list',
        name: 'license',
        message: 'What license (if any) does your project use?',
        choices: ['MIT', 'APACHE','GPL', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((inquirerResponses)) => {
        console.log('Generating a new README File');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}))
    }
}

// Function call to initialize app
init();
