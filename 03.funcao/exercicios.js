// 01) Calculadora 
const calculadora=(a=0,b=0)=>{
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}
calculadora(3,8)

//02) Triangulo
const triangulo=(a=0,b=0,c=0)=>{
    if (a==b && b==c) return "Equilatero"
    if ((a==b && a!=c) || (a==c && a!=b) || (b==c && a!=b) )  return "Isosceles"
    if (a!=b && a!=c && b!=a) return "Escaleno"  
}

console.log(triangulo(2,3,1))

//05) Formato Numero
const formatoNumero=(numero=0)=>{
    let miNumero=numero.toFixed(2)
    console.log("R$" + miNumero.replace(".",","))
}
formatoNumero(0.30000000000000004)

//08) Puntoacoes
const record=(pontos)=>{
    let b=pontos.split(" ")
    a=[]
    for (let i in b){
        a.push(Number(b[i]))
    }
    let records=0;
    let menor=0;
    for (let i=0; i<a.length; i++){
        if (a[i]>a[i-1]){
            records++
        }

        if (i<a.length-1){
            menor = (a[menor]<a[i+1]) ? menor :++i
        }
    }
    return [records,menor]
}

console.log(record('19 20 20 1 25 3 3 30 0'))