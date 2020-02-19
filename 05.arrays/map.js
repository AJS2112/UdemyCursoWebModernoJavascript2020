//Transforma o array
const nums=[1,2,3,4,5]
let resultado=nums.map(e=>e*2)
console.log(resultado)

const soma10=e=>e+10
const triplo=e=>e*3
const paraDinhero=e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado=nums.map(soma10).map(triplo).map(paraDinhero)
console.log(resultado)

const carrinho=[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lapiz", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}'
]
console.log(carrinho)

let precos=carrinho.map(function(e){
    obj= JSON.parse(e)
    return obj.preco
})
console.log(precos)

const paraObj= json=>JSON.parse(json)
const apenasPreco= produto=>produto.preco

let novosPrecos=carrinho.map(paraObj).map(apenasPreco)
console.log(novosPrecos)