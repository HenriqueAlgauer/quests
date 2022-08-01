function somar(numero1,numero2){
    let soma = numero1 + numero2
    return 'A soma dos números é: '+ soma
}

function subtrair(numero1, numero2){
    let subtracao = numero1 - numero2
    return 'A subtração dos números é: '+subtracao 
}

function multiplicar(numero1, numero2){
    let multiplicao = numero1 * numero2
    return 'A produto é: '+multiplicao
}

function dividir(numero1, numero2){
    let divisao = numero1 / numero2
    return 'A divisão de '+numero1+' por '+numero2+' é: '+divisao
}

console.log(somar(2,4))
console.log(subtrair(2,4))
console.log(multiplicar(2,4))
console.log(dividir(2,4))

