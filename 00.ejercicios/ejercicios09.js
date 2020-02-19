//09) Sistema de Notas
const Calificacao=(nota=0)=>{
    if (nota>100) {
        nota = 100
    }else if (nota>=38){
        if (nota%5>2) nota+=5-nota%5
    }
    return nota>=40 ? `Aprovado com ${nota}`: `Reprovado com ${nota}`
}

console.log(Calificacao(38))