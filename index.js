// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
    
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            //Email
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        {
            //GitHub username
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            //Project Title
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title');
                    return false;
                }
            }
        },
        {
            //Description
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project: (Required)',
            validate: descripInput => {
                if (descripInput) {
                    return true;
                } else {
                    console.log('Please enter your project description');
                    return false;
                }
            }
        },
        {
            //Installation
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required - Enter N/A if not applicable)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions.');
                    return false;
                }
            }
        },
        {
            //Usage
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use: (Required - Enter N/A if not applicable)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your usage instructions.');
                    return false;
                }
            }
        },
        {
            //Licenses
            type: 'list',
            name: 'license',
            message: 'Which license is needed for your project?',
            choices: ['Apache', 'GNU GPLv3', 'ISC','MIT', 'No license needed']
        },
        {
            //Contribution Guidelines
            type: 'input',
            name: 'contribute',
            message: 'Provide guidelines for contributors: (Required - Enter N/A if not applicable)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter your contribution guidlines.');
                    return false;
                }
            }
        },
        {
            //Test instructions
            type: 'input',
            name: 'testing',
            message: 'What are the steps to test? (Required - Enter N/A if not applicable)',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please enter your steps to test.');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        .then(pageXML => {
            return writeToFile(pageXML);
        })
        .catch (err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
