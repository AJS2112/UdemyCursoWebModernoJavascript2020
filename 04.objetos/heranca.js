const Ferrari={
    modelo:'F40',
    valMax:324
}

const Volvo={
    modelo:'V40',
    valMax:200
}

console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__===Object.prototype)
console.log(Volvo.__proto__)
console.log(Volvo.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)


///Cadeia de prototype 
Object.prototype.attr0='0'
const avo={attr1:'A'}
const pai={__proto__:avo,attr2:'B'}
const filho={__proto__:pai,attr3:'C'}
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

const carro={
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual+delta<=this.velMax){
            this.velAtual+=delta
        }else {
            this.velAtual=this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari={
    modelo:'F40',
    velMax:324
}

const volvo={
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}   

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(200)
volvo.acelerarMais(100)

console.log(ferrari.status())
console.log(volvo.status())
