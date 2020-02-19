//05) Formato numero
const FormatoNumero=(numero)=>`R$ ${numero.toFixed(2).toString().replace('.',',')}`
console.log(FormatoNumero( 0.30000000000000004))