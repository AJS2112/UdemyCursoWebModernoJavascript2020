function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1=new MeuObjeto
const obj2=new MeuObjeto
console.log(obj1.__prototype__===obj2.__prototype__)
console.log(MeuObjeto.prototype===obj1.__prototype__)

MeuObjeto.prototype.nome='Anonimo'
MeuObjeto.prototype.falar=function(){
    console.log(`Bom dia meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome="Rafael"
obj2.falar()

const obj3={}
obj3.__proto__=MeuObjeto.prototype
obj3.nome='Obj3'
obj3.falar()