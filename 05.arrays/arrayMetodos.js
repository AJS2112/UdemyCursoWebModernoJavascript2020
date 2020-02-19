const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() //Elimina ultimo
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona
console.log(pilotos)

pilotos.shift() //Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona no inicio
console.log(pilotos)

//splice pode adicionar e remover
//adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3,1)
console.log(pilotos)

//novo array
const algunsPilotos1=pilotos.slice(2)
console.log('slice: ',algunsPilotos1)
const algunsPilotos2=pilotos.slice(1,4)
console.log('slice: ',algunsPilotos2)