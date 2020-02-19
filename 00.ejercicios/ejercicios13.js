//13) Dia Util
const DiaUtil=(dia)=>{
    if (dia==0 || dia>7) return console.log('WTF bro!!')
    switch (dia) {
        case 1:
        case 7:
            console.log('Fim de semana!!')
            break;
        default:
            console.log('Dia Útil =(')
            break;
    }
}

DiaUtil(9)