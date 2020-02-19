let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados=['Bia','Carlos','Ana']
console.log(aprovados)

aprovados[3]='Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)

aprovados=['Bia','Carlos','Ana']
aprovados.splice(1,2)
console.log(aprovados)
aprovados=['Bia','Carlos','Ana']
aprovados.splice(1,2,'Pedro','Julia')
console.log(aprovados)