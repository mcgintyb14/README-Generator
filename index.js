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
        message: 'What is your email?',
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
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions (if any) to use the project?'
    },
    { 
        type: 'input',
        name: 'tests',
        message: 'What command(s) should be run to run test for the project?'
    },
    { 
        type: 'input',
        name: 'credits',
        message: 'Who are the contributors to the project?'
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
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating a new README File');
        writeToFile('Custom_README.md', generateMarkdown({...inquirerResponses}))
    });
}

// Function call to initialize app
init();
