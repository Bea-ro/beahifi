import './Projects.css'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Filters } from '../../components/ui/Filters/Filters'
import { Button } from '../../components/ui/Button/Button'
import {
  clearFilter,
  handleFilter,
  filterToggle
} from '../../utils/projectsFilter'
import { projects } from '../../data/projects'
import { pageDescriptions } from '../../data/pageDescriptions'

const main = document.querySelector('main')

export const renderProjectsPage = (category) => {
  let techs = []
  projects
    .filter(
      (project) =>
        project.category.split(' ').join('').toLowerCase() ===
        category.toLowerCase()
    )
    .map((project) => {
      project.techs.forEach((tech) => {
        if (!techs.includes(tech)) {
          techs.push(tech)
        }
      })
    })

  main.innerHTML = `
<h1 class="category-title">Mis Proyectos ${
    category === 'fullstack'
      ? 'Full Stack'
      : category.charAt(0).toUpperCase() + category.slice(1, category.length)
  }</h1>
  <p class="description"></p>
  <section class="filter-and-projects">
  ${Button('Filtro', 'button-filter')}
 ${Filters(techs)}
  <ul class="projects-list"></ul> 
</section>
`
  const spanFilter = main.querySelector('span')
  spanFilter.hidden = true

  const techInputs = document.querySelectorAll('.checkbox')
  techInputs.forEach((techInput) => {
    techInput.addEventListener('change', () => handleFilter(category))
  })

  document
    .querySelector('.clear')
    .addEventListener('click', () => clearFilter(category, techInputs))

  document.querySelector('.description').innerText =
    category === 'fullstack'
      ? pageDescriptions.fullstack
      : category === 'fronted'
      ? pageDescriptions.fronted
      : pageDescriptions.backend
}

export const renderProjects = (category, projects) => {
  const projectsToRender = document.querySelector('.projects-list')
  projectsToRender.innerHTML = `
${projects
  .filter(
    (project) =>
      project.category.split(' ').join('').toLowerCase() ===
      category.toLowerCase()
  )
  .map((project) => ProjectCard(project))
  .join('')}
`
  main.id = 'developer-main'
  filterToggle()
}
