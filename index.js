const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer-promise");
const templateReadme = require("./assets/js/templateReadme.js");

console.log(`\x1b[35mWelcome to the Markdown Generator, here we will take care of all your markdown generating needs such as generating a HIGH QUALITY README. 
You won't be disappointed... but if you are, this application is free, so we won't be giving you your money back. Enjoy! :)\x1b[0m`);

function prompt() {

    let inquirerPrompt = inquirer

        .prompt([

            {
                type: "input",
                message: "\x1b[4mPlease provide the title of your project...\x1b[0m",
                name: "projectTitle",
            },

            {
                type: "input",
                message: "\x1b[4mPlease provide a description of your project...\x1b[0m",
                name: "description",
            },

            {
                type: "input",
                message: "\x1b[4mPlease provide installation instructions...\x1b[0m",
                name: "installation",
            },

            {
                type: "input",
                message: "\x1b[4mPlease provide usage guidelines...\x1b[0m",
                name: "usage",
            },

            {
                type: "input",
                message: "\x1b[4mPlease provide contribution guidelines...\x1b[0m",
                name: "contribution",
            },

            {
                type: "input",
                message: "\x1b[4mPlease provide test instructions...\x1b[0m",
                name: "tests",
            },

            {
                type: "list",
                message: "\x1b[4mPlease choose a license from the following...\x1b[0m",
                name: "license",
                choices: [
                    "MIT",
                    "GNUAGPLv3",
                    "GNULGPLv3",
                    "MozillaPublicLicense2.0",
                    "ApacheLicense2.0",
                    "Unlicensed"
                ],
            },

            {
                type: "input",
                message: "\x1b[4mPlease provide the URL to your GitHub profile...\x1b[0m",
                name: "ghProfileUrl",
            },

            {
                type: "input",
                message: "\x1b[4mPlease provide the email address that people looking at this readme can contact you on...\x1b[0m",
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

    //Prompt user for information, wait for prompt results and store in promptResult
    const promptResult = await prompt();
    console.log("Prompt results stored.");

    //Store current files in "./output/" to access the length that will parse to the file name when writing.
    const outputDirArray = readDirOutput();
    console.log(`Output Files: ${outputDirArray}, No. of Files: ${outputDirArray.length}`);

    //Put results into the template and return as "processedReadme"
    const processedReadme = templateReadme.template(promptResult);
    console.log("Readme processed.");

    //Creates the readme file and places it in "./output/"
    let fileName = creaclearteFile(outputDirArray.length, processedReadme);
    console.log(`\x1b[35mReadme created. The file name is: "${fileName}"\x1b[0m`);

}

appProcess();