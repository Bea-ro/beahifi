import './FullStack.css'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
// import { skillsToggle } from '../../utils/show-skills-event';
// import { clearFilter, projectsFilter } from '../../utils/projects-filter';

const main = document.querySelector('main')

//<div class="filter">
//   <p class="filter-title">Filter by main language:</p>
//   <div class="filters-and-clear">
//   ${TechsList}
//   <button class="clear">Clear</button>
//   </div>
//   </div>

export const renderProjects = (category) => {
  main.innerHTML = `
<h1>projects ${category}</h1>
<ul>
${projects
  .filter(
    (project) =>
      project.category.split(' ').join('').toLowerCase() ===
      category.toLowerCase()
  )
  .map((project) => ProjectCard(project))
  .join('')}
</ul> 
`
  //skillsToggle();
  //   projectsFilter();
  //   clearFilter();
}
