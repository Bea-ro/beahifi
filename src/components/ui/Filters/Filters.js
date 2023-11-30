import './Filters.css'
import { Button } from '../Button/Button'

export const Filters = (techs) =>
  `
<div class="filter" id="filter">
  <div class="filter-label-and-options">
  <label for=${techs} class="filter-label">
    Lenguaje
  </label>
  ${techs
    .map(
      (tech) => `
    <div class='filter-options'>
      <input
        type='checkbox'
        id=${tech}
        name='lenguage'
        value=${tech}
        class="checkbox"
      />
      <label htmlFor=${tech}>${tech}</label>
    </div>
    `
    )
    .join('')}
</div>
${Button('Filtro', 'clear')}
  </div>
  </div>
  `
