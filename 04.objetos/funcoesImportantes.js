const pessoa={
    nome: 'Rebeca',
    idade: 2,
    peso:14
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true,
    writable:false,
    value:'01/01/2019'
})

pessoa.dataNascimento='01/01/2030'
console.log(pessoa)