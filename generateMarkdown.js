function generateMarkdown(data) {
  return `
  # Project Title: ${data.title} :raised_hands:
  - :bulb: ${data.description}
  
  ### User Story :speech_balloon:
  - ${data.story}
  
  ### :floppy_disk: Installation:
  > install with [npm](https://www.npmjs.com/)
  ${data.installation}
  > npm i ${data.title} 

  ### Usage
   ${data.usage}
  > var ${data.title} = require("${data.title}")

  ### Running Tests
  - install dev dependencies:
  ${data.test}

 ### Contrubution :handshake: 
 [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/${data.github}/${data.title}/issues)
  ${data.contribution}
  
 
  
  #### :bust_in_silhouette:	Author
  > - Name: ${data.name} [![follower](https://img.shields.io/github/followers/${data.github}?label=follower&style=social)](https://github.com/${data.github}?tab=followers)
  
  > - GitHub: [${data.github}](https://github.com/${data.github})

  > - <img src="${data.avatar}"/>
  > - email: ${data.email}
 ### License
  > ${data.license}
  - [![Copyright ©](https://img.shields.io/badge/Copyright-${data.name}-blue)]((https://github.com/${data.github}))
`;
}

module.exports = generateMarkdown;
