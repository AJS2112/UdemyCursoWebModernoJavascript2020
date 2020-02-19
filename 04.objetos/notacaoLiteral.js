const a=1
const b=2
const c=3
//Antes
const obj1={a:a, b:b, c:c}
//Atual
const obj2={a,b,c}
console.log(obj1,obj2)

const nomeAttr="Nome"
const valorAtte=7

const obj3={}
obj3[nomeAttr]=valorAtte
console.log(obj3)

const obj4={
    funcao1:function(){
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj4) 