// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username.',
     // checking for valid user input
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You Must Enter your GitHub Username.");
        }
        return true;
    }
},

    {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
     // checking for valid user input
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter your email address.");
        }
        return true;
    }
    },

    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
         // checking for valid user input
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the title of your project.");
            }
            return true;
        }
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        // checking for valid user input
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description of your project.");
            }
            return true;
        }
    },
    
];

//IM NOT 100% CLEAR ON AQUIRING OPEN SOURCED LICENSING EVERYTHING ELSE MAKES SENSE I WASNT SURE HOW TO ADD IT IN MY CODE SO I WILL HAVE TO RESUBMIT WHEN I HAVE MORE KNOWLEDGE

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) throw err;
        console.log("Creating file.");
    });
}

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });
}


// Function call to initialize app
init();