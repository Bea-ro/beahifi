import './style.css'
import { Header } from './src/components/Header/Header'
import { Footer } from './src/components/Footer/Footer'
import { renderHome } from './src/pages/Home/Home'
import {
  renderProjects,
  renderProjectsPage
} from './src/pages/Projects/Projects'
import { renderMarketing } from './src/pages/Marketing/Marketing'
import { projects } from './src/data/projects'
import { navbarToggle, showMenu } from './src/utils/navbarToggle'

document.querySelector('header').innerHTML = Header(
  '/logonuevo-madridhifi.webp'
)
const main = document.querySelector('main')

const handleClic = (ev) => {
  ev.preventDefault()
  const linkHref = ev.target.href

  showMenu()

  if (linkHref.includes('home')) {
    main.innherHTML = renderHome()
  } else if (linkHref.includes('fullstack')) {
    main.innherHTML = renderProjectsPage('fullstack')
    renderProjects('fullstack', projects)
  } else if (linkHref.includes('fronted')) {
    main.innherHTML = renderProjectsPage('fronted')
    renderProjects('fronted', projects)
  } else if (linkHref.includes('backend')) {
    main.innherHTML = renderProjectsPage('backend')
    renderProjects('backend', projects)
  } else if (linkHref.includes('marketing')) {
    main.innherHTML = renderMarketing()
  }
}

renderHome()

const pageLinks = document.querySelectorAll('.page-link')
pageLinks.forEach((pageLink) => pageLink.addEventListener('click', handleClic))

document.querySelector('footer').innerHTML = Footer(
  '/logonuevo-white-madridhifi.png'
)

navbarToggle()
