const alunos= [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado= alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador+atual
},10)

console.log(resultado)

//1) Todos os alunos sao bolsistas
const todosBolsistas= (resultado, bolsista)=> resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

//2) Algum e bolsista?
const algumBolsista= (resultado, bolsista)=> resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))

