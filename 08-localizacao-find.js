/* find() retorna o PRIMEIRO elemento que corresponde ao critério */

const valores = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const alimentos = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Encontrar primeiro valor negativo
console.log('Primeiro negativo:',
  valores.find(n => n < 0)
)

// Encontrar primeiro múltiplo de 5
console.log('Primeiro múltiplo de 5:',
  valores.find(n => n % 5 === 0)
)

// Encontrar primeiro maior que 20
console.log('Primeiro > 20:',
  valores.find(n => n > 20)
)

// Encontrar primeiro alimento iniciado com "m"
console.log('Primeiro com "m":',
  alimentos.find(a => a.charAt(0) === 'm')
)

// Encontrar primeiro terminado com "r"
console.log('Primeiro terminado com "r":',
  alimentos.find(a => a.slice(-1) === 'r')
)
