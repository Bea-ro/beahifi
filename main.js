import './style.css'
import { Header } from './src/components/Header/Header'
import { Footer } from './src/components/Footer/Footer'
import { renderHome } from './src/pages/Home/Home'
import { renderFullStack } from './src/pages/FullStack/FullStack'
import { renderFronted } from './src/pages/Fronted/Fronted'
import { renderBackend } from './src/pages/Backend/Backend'
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
    main.innherHTML = renderFullStack()
  } else if (linkHref.includes('fronted')) {
    main.innherHTML = renderFronted()
  } else if (linkHref.includes('backend')) {
    main.innherHTML = renderBackend()
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
