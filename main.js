import './style.css'
import { Header } from './src/components/Header/Header'
import { Footer } from './src/components/Footer/Footer'
import { renderHome } from './src/pages/Home/Home'
import { renderProjects } from './src/pages/FullStack/FullStack'
import { renderMarketing } from './src/pages/Marketing/Marketing'

document.querySelector('header').innerHTML = Header(
  '/logonuevo-madridhifi.webp'
)
const main = document.querySelector('main')

const handleClic = (ev) => {
  ev.preventDefault()
  const linkHref = ev.target.href

  if (linkHref.includes('home')) {
    main.innherHTML = renderHome()
  } else if (linkHref.includes('fullstack')) {
    main.innherHTML = renderProjects('fullstack')
  } else if (linkHref.includes('fronted')) {
    main.innherHTML = renderProjects('fronted')
  } else if (linkHref.includes('backend')) {
    main.innherHTML = renderProjects('backend')
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
