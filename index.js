const fs = require("fs");
const inquirer = require("inquirer-promise");
const templateReadme = require("./assets/js/templateReadme").template;

const appProcess = async function () {

    const prompt = inquirer

        .prompt([

            {
                type: "input",
                message: "Please provide the title of your project...",
                name: "projectTitle",
            },

            {
                type: "input",
                message: "Please give a description of your project...",
                name: "description",
            },

            {
                type: "input",
                message: "Please provide installation instructions...",
                name: "installation",
            },

            {
                type: "input",
                message: "Please provide usage guidelines...",
                name: "usage",
            },

            {
                type: "input",
                message: "Please provide contribution guidelines...",
                name: "contribution",
            },

            {
                type: "input",
                message: "Please provide test instructions...",
                name: "tests",
            },

            {
                type: "list",
                message: "Please choose a license from the following...",
                name: "license",
                choices: [
                    "Option 1",
                    "Option 2",
                    "Option 3",
                    "Option 4"
                ],
            },

            {
                type: "input",
                message: "Please provide the URL to your GitHub profile...",
                name: "ghProfileUrl",
            },

            {
                type: "input",
                message: "Please provide the email address that people looking at this readme can contact you on...",
                name: "email",
            },

        ])

    let promptResult = await prompt; //wait for prompt result and store in promptResult

    //Process 2: when the prompt results are received...
    if (promptResult) {

        

    };

}



    //Project name
    //readme: sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//prompt: description, installation instructions, usage information, contribution guidelines, and test instructions
//prompt: choose a license for my application from a list of options
//a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//prompt: github username => questions with a link to gh profile
//prompt: email => questions
//with instructions how to reach me with additional questions
