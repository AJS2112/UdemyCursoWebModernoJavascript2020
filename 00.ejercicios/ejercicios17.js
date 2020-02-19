//17) Aumento Salario
const Aumento=(plano, salario)=>{
    switch (plano) {
        case 'A':
            return (salario*1.10).toFixed(2)
            break;
        case 'B':
            return (salario*1.15).toFixed(2)
            break;               
        case 'C':
            return (salario*1.20).toFixed(2)
            break;
        default:
            return 'Plano Inválido'
            break;
    }
}

console.log(Aumento('A',1500))