import './FullStack.css'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Filters } from '../../components/ui/Filters/Filters'
import { projects } from '../../data/projects'
import { handleFilter } from '../../utils/projectsFilter'

const main = document.querySelector('main')

export const renderProjects = (category) => {
  main.innerHTML = `
<h1 class="category-title">Proyectos ${
    category === 'fullstack'
      ? 'Full Stack'
      : category.charAt(0).toUpperCase() + category.slice(1, category.length)
  }</h1>
  <section class="filter-and-projects">
${Filters}
  <ul class="projects-list">
${projects
  .filter(
    (project) =>
      project.category.split(' ').join('').toLowerCase() ===
      category.toLowerCase()
  )
  .map((project) => ProjectCard(project))
  .join('')}
</ul> 
</section>
`

  const techInputs = document.querySelectorAll('.checkbox')

  techInputs.forEach((techInput) => {
    techInput.addEventListener('change', handleFilter)
  })

  document
    .querySelector('.clear')
    .addEventListener('click', () => renderProjects(category))
}
