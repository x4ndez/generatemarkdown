const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([

        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },

    ])

    .then();


    //Project name
    //readme: sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//prompt: description, installation instructions, usage information, contribution guidelines, and test instructions
//prompt: choose a license for my application from a list of options
//a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//prompt: github username => questions with a link to gh profile
//prompt: email => questions
//with instructions how to reach me with additional questions
