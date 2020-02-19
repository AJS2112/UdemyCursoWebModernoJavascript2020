const fs= require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo) 

//assincrono...
fs.readFile(caminho,'utf-8',(erro,res)=>{
    const config = JSON.parse(res)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//json direito
const config = require('./arquivo.json')
console.log(config.db)

//Ler Direitorios
fs.readdir(__dirname,(erro,arquivos)=>{
    console.log('Conteudo da Pasta...')
    console.log(arquivos)
})
