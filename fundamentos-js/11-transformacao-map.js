/* map() cria novo array com elementos processados */

const valores = [13, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Transformar cada valor ao quadrado
const aoQuadrado = valores.map(n => n ** 2)

console.log('Original:  ', valores)
console.log('Quadrados: ', aoQuadrado)

// Transformar frutas em items HTML (comum em React)
const items = frutas.map(f => `<li>${f}</li>`)

console.log('-'.repeat(80))

console.log('<h1>FRUTAS DO BRASIL</h1>')
console.log('<ul>')
for(const item of items) console.log(item)
console.log('</ul>')
