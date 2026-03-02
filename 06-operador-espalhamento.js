// Encontrando min e max com valores individuais
let menor = Math.min(2, -5, 4, 0, 11, -1)
let maior = Math.max(2, -5, 4, 0, 11, -1)

console.log('Min e max de valores soltos:')
console.log({menor, maior})

console.log('-'.repeat(80))

// Tentativa com array (sem spread operator)
const numeros = [2, -5, 4, 0, 11, -1]

menor = Math.min(numeros)
maior = Math.max(numeros)

console.log('Min e max de array (sem espalhamento):')
console.log({menor, maior})

console.log('-'.repeat(80))

/* Operador spread (...) desempacota array em valores individuais */
menor = Math.min(...numeros)
maior = Math.max(...numeros)

console.log('Min e max com spread operator:')
console.log({menor, maior})

/* Copiando objetos com spread operator */

const veiculo1 = {
  modelo: 'Fiorino',
  marca: 'Fiat',
  ano: 1984,
  cor: 'bege'
}

// Criando cópia profunda com spread
const veiculo2 = {...veiculo1}

// Modificando a cópia
veiculo2.modelo = 'Fusca'
veiculo2.marca = 'Volkswagen'
veiculo2.cor = 'preto'
veiculo2.ano = 1969

console.log('-'.repeat(80))

console.log({veiculo1, veiculo2})
