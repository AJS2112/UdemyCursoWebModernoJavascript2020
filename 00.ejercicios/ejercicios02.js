//02) Triangulos
const TipoTringulo=(a,b,c)=>{
    if (a==b && b==c){
        console.log("Equilatero")
    } else if ( a==b  || b==c || a==c ){
        console.log("Isoceles")
    } else {
        console.log("Escaleno")
    }
    
}
TipoTringulo(1,2,3)