import { projects } from '../data/projects'
import { renderProjects } from '../pages/FullStack/FullStack'

export let filteredProjects = [...projects]

export const handleFilter = (category) => {
  const techInputs = document.querySelectorAll('.checkbox')
  let selectedTechs = []
  techInputs.forEach((techInput) => {
    if (techInput.checked) {
      selectedTechs.push(techInput.value)
    }
  })

  filteredProjects = projects.filter((project) =>
    selectedTechs.some((tech) => project.techs.includes(tech))
  )

  renderProjects(category, filteredProjects)
}

export const clearFilter = (category, techInputs) => {
  renderProjects(category, projects)
  techInputs.forEach((techInput) => {
    techInput.checked = false
  })
}
