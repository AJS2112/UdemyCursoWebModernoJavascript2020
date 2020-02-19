const pessoa={
    nome:'Ana',
    idade:25,
    endereco:{
        logradouro:'Rua ABC',
        numero:1000
    }
}
const {nome,idade}=pessoa
console.log(nome,idade)

const {sobrenome,bemHumorada=true}=pessoa 
console.log(sobrenome,bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro,numero,cep)

const [n1,,n3,,n5,n6=0]=[1,2,3,4]
console.log(n1,n3, n5,n6)


function rand({min=0,max=100}){
    const valor=Math.random()*(max-min)+min
    return Math.floor(valor)
}

const obj={max:50,min:40}
console.log(rand(obj))

function random([min=0,max=50]){
    if (min>max) [min,max]=[max,min]
    const valor=Math.random()*(max-min)+min
    return Math.floor(valor)
}

console.log(random([50,40]))