import './Home.css'
import { personalData } from '../../data/personalData'
import { pageDescriptions } from '../../data/pageDescriptions'

const main = document.querySelector('main')

export const renderHome = () => {
  main.innerHTML = `
  <figure class="personal-header">
  <img class="personal-img" src=${personalData.image} alt="beatriz-rodriguez"/>
<h1>Web Developer con experincia en Retail Marketing</h1>
<p>${pageDescriptions.home}</p>
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
  main.id = 'home-main'
}
