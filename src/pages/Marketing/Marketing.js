import './Marketing.css'
import { pageDescriptions } from '../../data/pageDescriptions'

const main = document.querySelector('main')

export const renderMarketing = () => {
  main.innerHTML = `
  <h1 class="category-title">Mi background en Marketing</h1>
  <p class="description">${pageDescriptions.marketing}</p>
`

  main.id = 'marketing-main'
}
