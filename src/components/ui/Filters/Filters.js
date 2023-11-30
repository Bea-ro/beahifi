import './Filters.css'

export const Filters = (techs) =>
  `
<div class="filter">
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

  <button class="clear">Filtro <span>x</span></button>
  </div>
  </div>
  `
