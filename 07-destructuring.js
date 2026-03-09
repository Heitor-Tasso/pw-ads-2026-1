/* DESTRUCTURING extrai valores de arrays e objetos */

// 1) Destructuring de arrays
const marcas = ['Fusca', 'Chevette', 'Opala']

const [marca1, marca2, marca3] = marcas

console.log({marca1, marca2, marca3})

// Destructuring parcial: 1º e 3º
const [primeiro, , ultimo] = marcas
console.log({primeiro, ultimo})

// Destructuring parcial: 2 primeiros
const [a, b] = marcas
console.log({a, b})

// Destructuring parcial: 2 últimos
const [, segundo, terceiro] = marcas
console.log({segundo, terceiro})

// SWAP de variáveis com destructuring
let x = 10, y = 20
console.log('Antes: ', {x, y})

{ [x, y] = [y, x] }
console.log('Depois:', {x, y})

console.log('-'.repeat(80))

// 2) Destructuring de objetos
const aluno = {
  nome: 'Orkutilson Osório Oliveira',
  sexo: 'M',
  dataNasc: '2010-04-29',
  email: 'orkutilson@gmail.com'
}

const {sexo, nome, email, indefinido} = aluno

console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('Email:', email)
console.log('Indefinido:', indefinido)
