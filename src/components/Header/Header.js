import './Header.css'
import { personalData } from '../../data/personalData'
import { phoneFormat } from '../../utils/phoneFormat'
import { Logo } from '../ui/Logo/Logo'
import { Navbar } from '../ui/Navbar/Navbar'

export const Header = (logoVersion) => `
  <div class="location-phone">
  <figure class="location">
  <img class="header-icon" src="/icons/map.svg" alt="map"/>
  <p>Madrid</p>
  </figure>
  <figure class="phone">
  <img class="header-icon" src="/icons/phone.svg" alt="phone"/>
  <a class="phone-number" href="tel:+34678207035">${phoneFormat(
    personalData.phone
  )}</a>
  </figure>
  </div>
  
  <div class="logo-contact-cta">
  ${Logo(logoVersion, 'header-logo')}  
  <div class="contact-cta">
  <a class="contact" href="mailto:${personalData.mail}">contáctame</a>
  <p class="cta">¡Quiero aportar!</p>
  </div>
  <span class="mobile-menu" id="mobile-menu">\u2630</span>
  </div>

${Navbar}
    `
