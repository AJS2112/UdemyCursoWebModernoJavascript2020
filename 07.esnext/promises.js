function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(frase)
        }, segundos*1000)
    })
}

falarDepoisDe(3,'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e=>console.log('Erro em frase: '+e))