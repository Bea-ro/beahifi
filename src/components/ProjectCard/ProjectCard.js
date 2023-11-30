import './ProjectCard.css'

/* <ul class="project-techs">
${PERSONALDATA.techs
  .map((tech) => {
    if (project.techs.includes(tech.name)) {
      return `<li class="tech">
      <img src=${tech.icon} alt=${tech.name} class="tech-icon" id=${tech.name}/></li>`
    }
  })
  .join('')}
</ul>  */

export const ProjectCard = (project) => `<li class="card" id=${project.name}>
        <a href=${project.projectURL} target="blank" rel="noopener noreferrer" class="project-img-info">
        <div class="project-img-container">
        <img src=${project.image} alt=${project.name} class="project-img"/>
        </div>
        <div class="card-info">
        <h2>${project.name}</h2>
        <span>${project.date}</span>
        <p class="project-description">${project.description}</p>
        <p class="project-techs">${project.techs}</p>
        </div>
        </a>
        <a class="code-link" href=${project.github} target="blank" rel="noopener noreferrer">Código</a>
        <ul class="skills-list">
      <li>Pte mapear</li>
        </ul>
    </li>`
