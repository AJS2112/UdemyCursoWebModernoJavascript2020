let valores=[8.1,7.4,5.1,9.9]

console.log(valores[0],valores[3])
console.log(valores[4])

valores[4]=10

console.log(valores)
console.log(valores.length)

valores.push({id:4},'olá', 34, null)
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)