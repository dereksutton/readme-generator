// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    if (license !== "none") {
        return `![license-badge](https://img.shields.io/badge/license/license-${license}-blue.svg)`;
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
    *[Installation](#Installation)
    *[Test](#Test)
    *[Usage](#Usage)
    *[Contributors](#Contributors)
    *[Contact](#Contact)

    ## Screenshot
    ![alt-text](${data.screenshot})

    ## Deployed URL
    ${data.url}

    
`;
}

module.exports = generateMarkdown;
