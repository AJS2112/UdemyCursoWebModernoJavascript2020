const produtos=[
    {nome:'Notebook',preco:2499,fragil:true},
    {nome:'iPad Pro',preco:4199,fragil:true},
    {nome:'Copo de Vidro',preco:12.49,fragil:true},
    {nome:'Copo de Plastico',preco:18.99,fragil:false},
]

console.log(produtos.filter(function(p){
    return p.preco>2500
}))

const produtoCaro = p => p.preco >= 500
const produtoFragil = p => p.fragil 

const listaFinal=produtos.filter(produtoCaro).filter(produtoFragil)
console.log(listaFinal)