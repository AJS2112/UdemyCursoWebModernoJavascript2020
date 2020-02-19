//Notacao Literal
const obj= {}
obj.nome="Meu Objeto"
console.log(obj)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcoes Construtoras
function Produto(nome, preco, desct){
    this.nome=nome
    this.GetPrecoComDisconto=()=>{
        return preco * (1-desct)
    }
}

const p1=new Produto('Caneca',7.99,0.15)
const p2=new Produto('Notebook', 2499.99,0.25)

console.log(p1.GetPrecoComDisconto())
console.log(p2.GetPrecoComDisconto())

//Funcao Factory
function crearFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1=crearFuncionario('Joao',7500,4)
const f2=crearFuncionario('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())

//Object.create
const filha=Object.create(null)
filha.nome="Ana"
console.log(filha)

//Um funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)

//Objeto Constante
const objetoConstante=Object.freeze({nome:'Joao',idade:21})
objetoConstante.nome="Pedro"
console.log(objetoConstante)