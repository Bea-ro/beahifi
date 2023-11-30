import './Home.css'
import { personalData } from '../../data/personalData'

const main = document.querySelector('main')

export const renderHome = () => {
  main.innerHTML = `
  <figure class="personal-header">
  <img class="personal-img" src=${personalData.image} alt="beatriz-rodriguez"/>
<h1>Web Developer con experincia en Retail Marketing</h1>
<p>
Me encantaría participar en el proceso de cambio de Madrid HiFi como Web Developer porque veo un doble reto: tanto desde el punto de vista de la programación, como desde el punto de vista del posicionamiento que la marca merece. Me encantan los retos, si son dobles mejor; y si además combinan mis dos pasiones...
</p>
</figure>
<ul class="skills">
${personalData.skills
  .map(
    (skill) => `
<li class="skill">
<img src=${skill.icon} alt=${skill.name}/>
<p>${skill.name}</p>
</li>
`
  )
  .join('')}
</ul>
`
}
