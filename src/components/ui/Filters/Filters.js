import './Filters.css'
import { techs } from '../../../data/techs'

export const Filters = `
  <div class="filter">
  <div class="filter-label-and-options">
  <label htmlFor=${techs} class="filter-label">
    Lenguage
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

  <button class="clear">x</button>
  </div>
  </div>
  `
