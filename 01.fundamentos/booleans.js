let isAtivo= true
console.log(isAtivo)
isAtivo= false
console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo)

console.log('os verdadeiros... ')
console.log('numero', !!3)
console.log('numero negativo',!!-1)
console.log('caracter',!!' ')
console.log('array',!![])
console.log('object',!!{})
console.log('asignacao',!!(isAtivo=true))

console.log('os falsos ....')
console.log('numero cero',!!0)
console.log('caracter vacio','')
console.log('null',!!null)
console.log('NaN',!!NaN)
console.log('undefined',!!undefined)

let nome=''
console.log(nome || 'Desconhencido')