const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer-promise");
const templateReadme = require("./assets/js/templateReadme.js");

function prompt() {

    let inquirerPrompt = inquirer

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
                    "MIT",
                    "GNU AGPLv3",
                    "GNU LGPLv3",
                    "Mozilla Public License 2.0",
                    "Apache License 2.0"
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

    return inquirerPrompt;

}

function readDirOutput() {

    const outputDir = path.join(".", "/", "output", "/");

    let readDir = fs.readdirSync(outputDir);

    return readDir;

}

function createFile(outputDirArrayLen, processedReadme) {

    //the file path to be written to
    const filePath = path.join(".", "/", "output", "/", `README_${outputDirArrayLen}.md`);

    //write the file
    fs.writeFile(filePath, processedReadme, function (err) {

        if (err) throw err;

    });

    return path.basename(filePath); //return basename of the file

}

async function appProcess() {

    const promptResult = await prompt(); //Prompt user for information, wait for prompt results and store in promptResult
    console.log("Prompt results stored.");

    const outputDirArray = readDirOutput(); //Store current files in "./output/" to access the length that will parse to the file name when writing.
    console.log(`Output Files: ${outputDirArray}, No. of Files: ${outputDirArray.length}`);

    //Put results into the template and return as "processedReadme"
    const processedReadme = templateReadme.template(promptResult);
    console.log("Readme processed.");

    //Creates the readme file and places it in "./output/"
    let fileName = createFile(outputDirArray.length, processedReadme);
    console.log(`Readme created. The file name is: "${fileName}"`);


}

appProcess();

    //Project name
    //readme: sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//prompt: description, installation instructions, usage information, contribution guidelines, and test instructions
//prompt: choose a license for my application from a list of options
//a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//prompt: github username => questions with a link to gh profile
//prompt: email => questions
//with instructions how to reach me with additional questions
