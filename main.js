// Função Soma 3 numberos

function somatorio() {


    const valor1 = Number(document.getElementById("numero_1").value)
    const valor2 = Number(document.getElementById("numero_2").value)
    const valor3 = Number(document.getElementById("numero_3").value)


    const resultado = valor1 + valor2 + valor3


    document.getElementById("resultadoSoma").innerHTML = "Resultado: " + resultado
}



// Função Pares


function imprimePares() {

    let resultado1 = "";
    for (let numeroPar = 2; numeroPar <= 100; numeroPar += 2) {
        resultado1 += numeroPar + " ";
    }

    document.getElementById("resultadoExCasa1").innerHTML = resultado1
}

// Calcular Media

function calcularMedia() {

    const valorMedia1 = Number(document.getElementById("numeroMedia_1").value)
    const valorMedia2 = Number(document.getElementById("numeroMedia_2").value)
    const valorMedia3 = Number(document.getElementById("numeroMedia_3").value)

    const resultadoMedia = (valorMedia1 + valorMedia2 + valorMedia3) / 3

    document.getElementById("resultadoMedia").innerHTML = "Media: " + resultadoMedia
}


// função de ler menor numero

function calcularMenorNumero() {

    const menorNum1 = Number(document.getElementById("menorNumero1").value)
    const menorNum2 = Number(document.getElementById("menorNumero2").value)

    let = resultadoMenorNumero

    if (menorNum1 < menorNum2) {
        resultadoMenorNumero = menorNum1

    } else {
        resultadoMenorNumero = menorNum2

    }

    document.getElementById("resultadoMenorNumero").innerHTML = "Menor Número é: " + resultadoMenorNumero
}

// função ler o maior numero

function calcularMaiorNumero() {

    const maiorNum1 = Number(document.getElementById("maiorNumero_1").value)
    const maiorNum2 = Number(document.getElementById("maiorNumero_2").value)

    let = resultadoDoMaiorNumero

    if (maiorNum1 > maiorNum2) {
        resultadoDoMaiorNumero = maiorNum1

    } else {
        resultadoDoMaiorNumero = maiorNum2

    }

    document.getElementById("resultadoDoMaiorNumero").innerHTML = resultadoDoMaiorNumero
}

// Função inverter array

function inverteArray(testeArray) {

    let array = []

    for (let i = testeArray.length - 1; i >= 0; i--)
        array.push(testeArray[i])
    return array
}

let numerosArray = [1, 2, 3, 4, 5]
let inverso = inverteArray(numerosArray)
console.log(inverso)

// Achar Array

function acharArray(numero, array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {

            return true

        }

    }
    return false
}


let numero = [1, 3, 6, 20, 36, 40]

let encontrado = acharArray(20, numero)
console.log(encontrado)

encontrado = acharArray(2, numero)
console.log(encontrado)




