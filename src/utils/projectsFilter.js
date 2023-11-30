export const handleFilter = (ev) => {
  const techInputs = document.querySelectorAll('.checkbox')
  let selectedTechs = []

  techInputs.forEach((techInput) => {
    if (techInput.checked) {
      selectedTechs.push(techInput.value)
    }
  })

  const renderedProjects = [...document.querySelectorAll('.card')]

  renderedProjects.filter((renderedProject) => {
    const projectText = renderedProject.outerText
    if (selectedTechs.some((tech) => !projectText.includes(tech))) {
      renderedProject.remove()
    }
  })

  // const noProjectsMessage = document.createElement('p')
  // noProjectsMessage.className = 'no-projects-message'
  // main.append(noProjectsMessage)
  // if (filteredList.length === 0) {
  //   document.querySelector('.projects-list').remove()
  //   noProjectsMessage.innerText =
  //     'No hay proyectos de ${category} con este lenguage.'
  // } else {
  //   noProjectsMessage.remove()
  // }
}
