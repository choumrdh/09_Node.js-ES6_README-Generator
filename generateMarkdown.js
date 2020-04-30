function generateMarkdown(data) {
  return `
  # Project Title: ${data.title} :raised_hands:
  - ${data.description}:bulb: 

  ## Table of Contents:
  - [User Story](https://github.com/${data.github}/${data.title}#user-story-speech_balloon)
  - [Installation](https://github.com/${data.github}/${data.title}#installation-floppy_disk)
  - [Usage](https://github.com/${data.github}/${data.title}#usage)
  - [Tests](https://github.com/${data.github}/${data.title}#tests)
  - [Contribution](https://github.com/${data.github}/${data.title}#contribution-handshake)
  - [Author](https://github.com/${data.github}/${data.title}#author-bust_in_silhouette)
    - [Name](https://github.com/${data.github}/${data.title}#author-bust_in_silhouette)
    - [GitHub](https://github.com/${data.github}/${data.title}#author-bust_in_silhouette)
    - [Email](https://github.com/${data.github}/${data.title}#author-bust_in_silhouette)
  - [License](https://github.com/${data.github}/${data.title}#license-trophy)
  
  ### User Story :speech_balloon:
  - ${data.story}
  
  ###  Installation :floppy_disk::
  ${data.installation === "" ? `> npm install ` : `> ${data.installation}`}
   
  ### Usage

   ${data.usage === "" ? `> var ${data.title} = require("${data.title}")` : `> ${data.usage}`}
  
  ### Tests
  
  ${data.test === ""  ? `- install dev dependencies:`: `- ${data.test}`}

 ### Contribution :handshake: 
 ${data.contribution}
 [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/${data.github}/${data.title}/issues)
  
  
 
  
  #### 	Author :bust_in_silhouette:
   - Name: ${data.name} [![follower](https://img.shields.io/github/followers/${data.github}?label=follower&style=social)](https://github.com/${data.github}?tab=followers)
  
  > - GitHub: [${data.github}](https://github.com/${data.github})
  > - email: ${data.emailAddress === "Yes" ? `${data.email}` : `Not available`}
  > ${data.profilePic === "Yes" ? `<img src="${data.avatar}"/>` : ``} 
  
 ### License :trophy:
  > ${data.license === "" ? `- [![Copyright](https://img.shields.io/badge/Copyright-${data.name}-blue)](https://github.com/${data.github})` : `${data.license}`}
  
`;
}

module.exports = generateMarkdown;
