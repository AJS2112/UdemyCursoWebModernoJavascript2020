//11) Ano Bissextos
const Bissexto=(ano)=>{
    let esBissexto=false
    if (ano%4==0) esBissexto=true
    if (ano%100==0) esBissexto=false
    if (ano%400==0) esBissexto=true
    console.log(`O ano es bissexto = ${esBissexto}`)
    return esBissexto
}

Bissexto(4)
Bissexto(100)
Bissexto(400)
Bissexto(800)
Bissexto(2020)
Bissexto(2021)