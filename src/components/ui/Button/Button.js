import './Button.css'

export const Button = (buttonText, className) =>
  `
  <button type="button" class=${className}>${buttonText}  <span>x</span></button>
  `
