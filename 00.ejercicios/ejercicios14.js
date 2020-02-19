//14) Vemda de frutas
const Vemda=(fruta)=>{
    fruta=fruta.toString().toLowerCase()
    switch (fruta) {
        case 'maça':
            return 'Não vemdemos esta fruta aqui'
            break;
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break;
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break;
        default:
            return 'Ocurrio um erro'
            break;
    }
}
console.log(Vemda('Maça'))