//Object.values/Object.entries
const obj={a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notacao
const nome="Ana"
const pessoa={
    nome,
    idade:23,
    ola(){
        return 'Olá'
    }
}
console.log(pessoa)
console.log(pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    fala(){
        return 'Guau guau!'
    }
}
const Fido = new Cachorro
console.log(Fido.fala())

