const escola="Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','))

const nome='Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!
`
console.log(concatenacao,template)
console.log(`1 + 1 = ${1 +1 }`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
