import './Footer.css'
import { personalData } from '../../data/personalData'
import { phoneFormat } from '../../utils/phoneFormat'
import { Logo } from '../ui/Logo/Logo'

export const Footer = (logoVersion) => `
  ${Logo(logoVersion, 'footer-logo')}
  <div class="phone-mail">
  <a href="tel:+34${personalData.phone}">Telf.: ${phoneFormat(
  personalData.phone
)}</a>
  <a href="mailto:${personalData.mail}">Email: ${personalData.mail}</a>
  </div>
  <ul class="personal-links">
  ${personalData.links
    .map(
      (link) => `
<li>
  <a href=${link.url} target="blank" rel="noopener noreferrer"><img class="personal-link-icon" src=${link.icon} alt=${link.name}/></a>
  </li>
  `
    )
    .join('')}
  </ul>
      `
