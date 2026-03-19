/* reduce() reduz array a um único valor aplicando função cumulativa */

const valores = [1, 2, 3, 4, 5, 6]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Somar todos os valores
const total = valores.reduce((acc, el) => acc + el)
console.log('Soma:', total)

// Multiplicar todos
const multiplicacao = valores.reduce((acc, el) => acc * el)
console.log('Produto:', multiplicacao)

console.log('-'.repeat(80))

// Concatenar frutas com debug de cada passo
const concatenado = frutas.reduce((acc, el) => {
  console.log(`Acumulado: ${acc}; atual: ${el}`)
  return acc.toUpperCase() + '; ' + el.toUpperCase()
})
console.log('\nResultado final:\n', concatenado)
