/* Função tradicional com 1 parâmetro */
function elevarAoQuadrado(n) {
  return n * n
}

console.log('Tradicional: 7² =', elevarAoQuadrado(7))

/*
  Equivalente com arrow function:
  - sem chaves para uma única linha
  - sem parênteses para um parâmetro
  - return implícito
*/
const quadrado = n => n * n
console.log('Arrow: 7² =', quadrado(7))

/* Função tradicional com múltiplos parâmetros */
function calcularExpressao(a, b, c) {
  return a * b + c
}
console.log('Tradicional: 10 * 20 + 30 =', calcularExpressao(10, 20, 30))

/*
  Equivalente em arrow function
  - parênteses obrigatórios para múltiplos parâmetros
*/
const expressao = (a, b, c) => a * b + c
console.log('Arrow: 10 * 20 + 30 =', expressao(10, 20, 30))

/* Função tradicional sem parâmetros */
function obterMensagemErro() {
  return "ERRO CRÍTICO"
}
console.log('Tradicional:', obterMensagemErro())

/* Arrow function sem parâmetros */
const erro = () => "ERRO CRÍTICO"
console.log('Arrow:', erro())

/* Função tradicional com corpo múltiplo */
function calcularFatorial(x) {
  let resultado = 1
  for(let i = x; i > 1; i--) resultado *= i
  return resultado
}
console.log('Tradicional: 8! =', calcularFatorial(8))

/* Arrow function com múltiplas linhas */
const fatorial = x => {
  let resultado = 1
  for(let i = x; i > 1; i--) resultado *= i
  return resultado
}
console.log('Arrow: 8! =', fatorial(8))
