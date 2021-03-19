// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === 'Apache') {
    licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  }
  else if (license === 'GNU GPLv3') {
    licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
  }
  else if (license === 'ISC') {
    licenseBadge = "https://img.shields.io/badge/License-ISC-blue.svg"
  } 
  else if (license === 'MIT') {
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === 'Apache') {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  }
  else if (license === 'GNU GPLv3') {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
  }
  else if (license === 'ISC') {
    licenseLink = "https://opensource.org/licenses/ISC"
  } 
  else if (license === 'MIT') {
    licenseLink = "https://opensource.org/licenses/MIT"
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSec = "";
  if (license === 'Apache') {
    licenseSec = "This application is covered under the Apache license";
  }
  else if (license === 'GNU GPLv3') {
    licenseSec = "This application is covered under the GNU GPLv3 license"
  }
  else if (license === 'ISC') {
    licenseSec = "This application is covered under the ISC license"
  } 
  else if (license === 'MIT') {
    licenseSec = "This application is covered under the MIT license"
  }

  return licenseSec;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.testing}

  ## Questions
  If you have any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub page [here](https://github.com/${data.username}/)
  `;
}

module.exports = generateMarkdown;
