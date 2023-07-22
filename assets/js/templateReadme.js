let template = function (promptResult) {

    let templateStr = `
    
    # ${promptResult.projectTitle}

    <!-- Please take  screenshot of the deployed application and place it in ./assets/ -->
    ![Screenshot of application](./assets/screenshot.png)
    
    ## Description
    ${promptResult.description}

    ## Table of Contents
    
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contribution](#contribution)
    5. [Tests](#tests)
    6. [Questions](#questions)
    
    ## Installation
    ${promptResult.installation}
    
    ## Usage
    ${promptResult.usage}
    
    ## License
    ![License Badge: ${promptResult.license}](https://img.shields.io/badge/License-${promptResult.license}-blue)
    This project is covered under the ${promptResult.license} License.
    
    ## Contribution
    ${promptResult.contribution}
    
    ## Tests
    ${promptResult.tests}
    
    ## Questions
    GitHub Profile: <${promptResult.ghProfileUrl}>
    Any questions can be directed to... <${promptResult.email}>.

    `;

    return templateStr;

}

module.exports = {

    template,

}