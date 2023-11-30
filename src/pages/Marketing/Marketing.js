import './Marketing.css'

const main = document.querySelector('main')

export const renderMarketing = () => {
  main.innerHTML = `
  <h1 class="category-title">Mi background en Marketing</h1>
  <p class="description">He trabajado más de diez años en Marketing en una marca líder en su categoría. Con un lineal de productos de más de dos mil referencias y casi cien puntos de venta, viví el lanzamiento del e-commerce, siendo partícipe tanto de dificultades como de logros, y del peso que enseguida tomó en el volumnen de ventas. Sin olvidar su relevancia en el posicionamiento de la marca.</br>
  Por eso me encantaría tomar parte del reto al que se enfrenta Madrid HiFi.
  </p>
`

  main.id = 'marketing-main'
}
