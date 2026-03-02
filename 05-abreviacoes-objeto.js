// Dados de um usuário
const nomeCompleto = 'Jonicleisson Junqueira Júnior'
const apelido = 'junin'
const equipe = 'alunos'

// Criação de objeto com sintaxe tradicional
const usuario1 = {
  nomeCompleto: nomeCompleto,
  apelido: apelido,
  equipe: equipe
}
console.log(usuario1)

/* Propriedade abreviada: quando o nome é igual à variável,
   pode-se omitir a atribuição explícita
*/
const usuario2 = {
  nomeCompleto,
  apelido,
  equipe
}
console.log(usuario2)

// Misturando propriedades abreviadas e explícitas
const usuario3 = {
  nomeCompleto,
  apelido,
  senha: 'SoberanoTricolor',
  equipe,
  ultimoLogin: '2026-03-02 11:27:35'
}
console.log(usuario3)

/* Debug com propriedades abreviadas */
const a = 10, b = 'batata'

console.log(a, b)
console.log({a, b})  // Versão melhorada para debugging
