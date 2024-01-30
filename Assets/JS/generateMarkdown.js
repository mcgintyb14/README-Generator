const licenseResponses = require('./index')
var licenseBadge = '';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// The below function accomplishes all three taks of creating a badge, link 
function renderLicenseBadge(license) {

  if(!license)
    licenseBadge = '';

  if(license === 'MIT')
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  
  if(license === 'APACHE')
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  
  if(license === 'GPL')
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

return licenseBadge;

};

renderLicenseBadge();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the project, please use the following commands:
\'\'\'
${data.installation}
\'\'\'

## Usage

${data.instructions}

## License

${data.license}

${licenseBadge}

## Contributing

${data.credits}

## Tests
${data.tests}

## Questions

Email: ${data.email} \n
Github Profile: https://www.github.com/${data.username}

`;
}

module.exports = generateMarkdown;
