/* Calcula área de formas geométricas
   Parâmetro tipo tem valor padrão 'R'
*/
function calcularArea(base, altura, tipo = 'R') {
  switch(tipo) {
    case 'R':     // Retângulo
      return base * altura
    case 'T':     // Triângulo
      return base * altura / 2
    case 'E':     // Elipse/círculo
      return (base / 2) * (altura / 2) * Math.PI
    default:      // Inválido
      return undefined
  }
}

console.log(`Triângulo 10×30: ${calcularArea(10, 30, 'T')}`)
console.log(`Elipse (círculo) 7.5×7.5: ${calcularArea(7.5, 7.5, 'E')}`)
console.log(`Retângulo 12.8×15.5: ${calcularArea(12.8, 15.5, 'R')}`)
console.log(`Forma desconhecida 8×17: ${calcularArea(8, 17, 'H')}`)

// Usando valor padrão
console.log(`Retângulo 20×40: ${calcularArea(20, 40)}`)
