function generateMarkdown(data) {
  return `
  # Project Title: ${data.title} :raised_hands:
  - :bulb: ${data.description}
  
  ### User Story :speech_balloon:
  - ${data.story}
  
  ### Installation
  install with [npm](https://www.npmjs.com/)
  > npm i ${data.installation} 

  ### Usage
  - ${data.usage}
  > - var ${data.title} = require("${data.title}")

  ### Running Tests
  - install dev dependencies:
  > - ${data.test}

 ### Contrubution :handshake: 
 [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/${data.github}/esta/issues)
  > - ${data.contribution}
  
 
  
  #### :bust_in_silhouette:	Author
  > - Name: ${data.name} https://img.shields.io/github/followers/${data.github}?label=follower&style=social
  
  > - GitHub: [${data.github}](https://github.com/${data.github})
  > - <img src="${data.avatar}"/>
  > - email: ${data.email}
 ### License
  > - [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://github.com/${data.github}/${data.title})
  - copyright ${data.name}
`;
}

module.exports = generateMarkdown;
