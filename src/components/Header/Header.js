import './Header.css'
import { personalData } from '../../data/personalData'
import { phoneFormat } from '../../utils/phoneFormat'
import { Logo } from '../ui/Logo/Logo'
import { Navbar } from '../ui/Navbar/Navbar'

export const Header = (logoVersion) => `
  <div class="location-phone">
  <figure class="location">
  <img src="" alt=""/>
  <p>Madrid</p>
  </figure>
  <figure class="phone">
  <img src="" alt=""/>
  <a class="phone-number" href="tel:+34678207035">${phoneFormat(
    personalData.phone
  )}</a>
  </figure>
  </div>
  
  <div class="logo-contact-cta">
  ${Logo(logoVersion, 'header-logo')}
  <input type="search"></input>
  <img src="" alt=""/>
  
  <div class="contact-cta">
  <a class="contact">contáctame</a>
  <p class="cta">¡Quiero aportar!</p>
  </div>

  </div>

${Navbar}
    `
