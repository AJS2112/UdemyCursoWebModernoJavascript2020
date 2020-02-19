function Pessoa(){
    return {
        nome: 'Ana',
        sobrenoma: 'Paula'
    }
}

console.log(Pessoa())

function Producto(nome="",preco=0){
    return{
        nome,
        preco,
        disconto:0.5
    }
}

const Pepsi=Producto('Pepsi',5)
console.log(Pepsi)