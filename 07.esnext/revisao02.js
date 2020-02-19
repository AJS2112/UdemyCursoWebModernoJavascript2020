//Arrow Functions
const soma = (a,b) => a + b
console.log(soma(2,3))

//parametro padrao
function log(texto='Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

//operador rest
function total(...numeros){
    let total=0
    numeros.forEach(n=>total +=n)
    return total
}

console.log(total(1,2,3,4,5,6))