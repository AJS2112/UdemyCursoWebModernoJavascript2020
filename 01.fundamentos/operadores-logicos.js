function compras(trabalho1, trabalho2){
    const compraSorvette=trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel=!compraSorvette

    return {compraSorvette,comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))

const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'

console.log(resultado(7.1))