const pessoa = 'Valcicleide'
const anos = 20
const localidade = 'Morro Alto de Cima/MG'

// Concatenação tradicional
const descricao1 = 'Meu nome é ' + pessoa + ', tenho ' + anos +
  ' anos e moro em ' + localidade + '.'
console.log(descricao1)

/* Template strings com interpolação
   Usam backticks (`) e ${variável} para inserir valores
*/
const descricao2 = `Meu nome é ${pessoa}, tenho ${anos} anos e moro em ${localidade}.`
console.log(descricao2)

// Expressões dentro de template strings
console.log(`EM ${2026 + 7}, ${pessoa.toUpperCase()} TERÁ ${anos + 7} ANOS.`)
