let nota = 7.6, status

if(nota >= 6) {
  status = 'APROVADO'
}
else {
  status = 'Reprovado'
}

console.log('Aluno com nota', nota, '→', status)

/* Usando operador ternário para simplificar */
nota = 5.1
status = nota >= 6 ? 'APROVADO' : 'Reprovado'

console.log('Aluno com nota', nota, '→', status)

//------------------------------------------------------------

let usuario = 'guest', mensagem

/* Verificar permissões com if..else */
if(usuario === 'admin') mensagem = 'Bem-vindo ao painel!'
else mensagem = 'Acesso bloqueado.'

console.log(`${usuario}: ${mensagem}`)

/* Mesma lógica com operador ternário */
mensagem = usuario === 'admin' ? 'Bem-vindo ao painel!' : 'Acesso bloqueado.'
console.log(`${usuario}: ${mensagem}`)
