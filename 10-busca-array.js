const modelos = ['Chevette', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/* includes() verifica se elemento existe (true/false) */
console.log('Tem Fusca?', modelos.includes('Fusca'))
console.log('Tem Corcel?', modelos.includes('Corcel'))
console.log('Tem Belina?', modelos.includes('Belina'))

/* indexOf() retorna a posição do elemento (-1 se não existe) */
console.log('Posição Maverick:', modelos.indexOf('Maverick'))
console.log('Posição Chevette:', modelos.indexOf('Chevette'))
console.log('Posição Kombi:', modelos.indexOf('Kombi'))

/* Antes de 2015, includes() não existia
   Usava-se indexOf() >= 0 para verificar existência */
console.log('Tem Fusca?', modelos.indexOf('Fusca') >= 0)
console.log('Tem Corcel?', modelos.indexOf('Corcel') >= 0)
console.log('Tem Belina?', modelos.indexOf('Belina') >= 0)
