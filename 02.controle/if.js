function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com '+nota)
    }
}

soBoaNoticia(8)

function seForVerdadeEuFalo(valor){
    if (valor){
        console.log('É verdade...'+valor)
    }
}

seForVerdadeEuFalo('hola')
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(NaN)

