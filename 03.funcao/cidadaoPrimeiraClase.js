//criar de forma literal
function fun1(){ }

//Armazenar em una variável
const fun2 = function(){}

//Armazenar em un array
const array=[function(a,b){return a+b}, fun1, fun2]

console.log(array[0](2,3))

//Armazenar uma funco em um atributo de objeto
obj={}
obj.falar=function(){return 'Opa!'}
console.log(obj.falar())

//Passar funcao como param
function run(fun){
    fun()
}

run(function(){return console.log('Exectuando funçao como parametro')})

//Um funcao pode retornar/conter um funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMas=soma(2,3)
cincoMas(4)