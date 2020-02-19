//06) Taxas de Juros
const JurosSimples=(capitalInicial,taxa,tempo)=>{
    return capitalInicial + (capitalInicial * taxa * tempo)
}
const JurosCompostos=(capitalInicial,taxa,tempo)=>{
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(JurosSimples(1000,10/100,4))
console.log(JurosCompostos(1000,10/100,4))