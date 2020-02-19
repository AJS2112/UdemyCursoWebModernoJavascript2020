//16) Calculadora Switch
const Calculadora=(a=0,signo,b=0)=>{
    switch (signo) {
        case '+':
            return a+b
            break;   
        case '-':
            return a-b
            break;            
        case '*':
            return a*b
            break;
        case '/':
            return a/b
            break;
        default:
            return 'Operação Inválida'
        break;
    }
}

console.log(Calculadora(3,'%',4))