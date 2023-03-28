// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
const renderLicenseBadge = (license) => {
    if (license !== "none") {
        return `![${license}](https://img.shields.io/badge/license/license-${license}-blue.svg)`;
    }
    return "";
}

// function that returns the license link
// If there is no license, returns an empty string
const renderLicenseLink = (license) => {
    if (license !== "none") {
        return `[${license}](https://opensource.org/licenses/${license})`;
    }
    return "";
}

// function to generate markdown for README

const generateMarkdown = (data) => {
  return `
    # ${data.title}

    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}

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

    ## Installation
    ${data.installation}

    ## Test
    ${data.test}

    ## Usage
    ${data.usage}

    ## Contributors
    ${data.contributing}

    ## Contact
    Built by [github/${data.github}](https://github.com/${data.github}). You can email me [here](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
