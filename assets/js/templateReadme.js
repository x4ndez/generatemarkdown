let template = function (promptResult) {

    let templateStr = `
    
    # ${promptResult.projectTitle}

    <!-- Please take  screenshot of the deployed application and place it in ./assets/ -->
    ![Screenshot of application](./assets/screenshot.png)
    
    ## Table of Contents
    
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contribution](#contribution)
    6. [Tests](#tests)
    6. [Questions](#questions)
    
    ## Description
    ${promptResult.description}
    
    ## Installation
    ${promptResult.installation}
    
    ## Usage
    ${promptResult.usage}
    
    ## License
    
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