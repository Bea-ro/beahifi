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

export const ProjectCard = (project) => `<li>
        <a href=${project.projectURL} target="blank" rel="noopener noreferrer" class="project-img-info">
        <img src=${project.image} alt=${project.name} class="project-img"/>
        <div class="card-info">
        <div class="project-title-date">
        <h2>${project.name}</h2>
        <span>${project.date}</span>
        </div>
        <p class="project-description">${project.description}</p>
        </div>
        </a>

        <button class="skills" id="requirements">See requirements</button>
        <ul class="skills-list">
      <li>Pte mapear</li>
        </ul>
        <div class="project-links">
        <figure>
        <a href="${project.github}" class="project-link" target="blank" rel="noopener noreferrer">
        <img src="icons/github-icon.png" alt=${project.name} class="social-icon"/>
        <p class="project-in-github">See the code</p>
        </a>
        </figure>
        <figure>
        <a href="${project.projectURL}" class="project-link" target="blank" rel="noopener noreferrer">
        <span class="link-icon">🔗</span><p class="project-in-github">Check it out</p>
        </a>
        </figure>
        </div>
    </li>`
