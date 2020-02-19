const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtroPais=f=>f.pais=='China'
const filtroGenero=f=>f.genero=='F'
const filtroMenorSalario=(func,funcAtual)=>{
    return func.salario<funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response=>{
    const funcionarios=response.data
    console.log(funcionarios)
    const mulherChinesePovre=desafio(funcionarios)
    console.log('mulherChinesePovre',mulherChinesePovre)
})


const desafio=(f)=>{
    return f.filter(filtroPais).filter(filtroGenero).reduce(filtroMenorSalario)
}



