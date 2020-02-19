//15) Compra Carro
const CompraCarro=(modelo)=>{
    modelo=modelo.toString().toLowerCase()
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break;
        case 'sedans':
        case 'motocicletas':
        case 'caminhoinetes':
            return 'Tem certeza que não prefere este modelo'   
            break;
        default:
            return "Não trabalhamos com este modelo de automovel aqui"
            break;
    }
}

console.log(CompraCarro('sedans'))