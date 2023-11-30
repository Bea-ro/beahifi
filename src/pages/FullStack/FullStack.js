import './FullStack.css'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Filters } from '../../components/ui/Filters/Filters'
import { clearFilter, handleFilter } from '../../utils/projectsFilter'
import { projects } from '../../data/projects'

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
 ${Filters(techs)}
  <ul class="projects-list"></ul> 
</section>
`

  const techInputs = document.querySelectorAll('.checkbox')
  techInputs.forEach((techInput) => {
    techInput.addEventListener('change', () => handleFilter(category))
  })

  document
    .querySelector('.clear')
    .addEventListener('click', () => clearFilter(category, techInputs))

  document.querySelector('.description').innerText =
    category === 'fullstack'
      ? 'Todo e-commerce requiere de una web Full Stack y Madrid HiFi necesita un Fronted acorde al posicionamiento de una marca consolidada de referencia, que trasmita sus fortalezas y ofrezca la mejor UX; así como un backend bien estructurado para lograr el mejor merchandising de un lineal de productos tan extenso.'
      : category === 'fronted'
      ? 'Porque facilitar la UX y mejorar el diseño supone incrementar las ventas. En mis proyectos de Fronted, siempre tengo en cuenta detalles que mejoran la UX, no es suficiente con que todo funcione. Además, un buen desarrollo en términos de legibilidad y escalabilidad es básico cuando la base de datos es tan extensa y dinámica como en este e-commerce.'
      : 'Porque tener una buena base de datos no solo facilita la mejor visualización de los productos, sino también un mejor análisis de ventas y consumer insights y un ahorro de costes de desarrollo, haciendo el e-commerce más dinámico y escalable.'
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
}
