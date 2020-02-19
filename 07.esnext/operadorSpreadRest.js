const funcionario={nome:'Maria', salario:1234.44}
const clone= {ativo: true, ...funcionario}
console.log(clone)

const grupoA= ['Joao', 'Pedro', 'Gloria']
const grupoFinal= ['Rafaela', 'MAria', ...grupoA]
console.log(grupoFinal)