/* filter() cria novo array com elementos que atendem ao critério */

const valores = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const alimentos = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Apenas valores negativos
console.log('Negativos:',
  valores.filter(n => n < 0)
)

// Apenas múltiplos de 5
console.log('Múltiplos de 5:',
  valores.filter(n => n % 5 === 0)
)

// Apenas maiores que 20
console.log('Maiores que 20:',
  valores.filter(n => n > 20)
)

// Apenas alimentos com "m"
console.log('Iniciados com "m":',
  alimentos.filter(a => a.charAt(0) === 'm')
)

// Apenas terminados com "r"
console.log('Terminados com "r":',
  alimentos.filter(a => a.slice(-1) === 'r')
)
