// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## License

${data.license}

### Table of Contents
# Installation
# Usage
# Credits
# License

## Installation
To install the project, please use the following commands:
\'\'\'
${data.installation}
\'\'\'

## Usage

${data.instructions}

## Credits

${data.credits}

## Contact

${data.email}
`;
}

module.exports = generateMarkdown;
