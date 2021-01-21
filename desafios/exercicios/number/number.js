let number = prompt('Digite um número: ')

function informacoes(number) {
    number = parseInt(number)

    let element = document.getElementById('number-titule')
    element.innerHTML = number

    let container = document.getElementById('container')
    container.innerHTML += `Raiz do seu número é ${Math.sqrt(number)} <br />`
    container.innerHTML += `Seu número é ${number} <br />`
    container.innerHTML += `Inteiro? ${Number.isInteger(number)} <br />`
    container.innerHTML += `NaN? ${Number.isNaN(number)} <br />`
    container.innerHTML += `Arredondando para baixo ${Math.floor(number)} <br />`
    container.innerHTML += `Duas casas decimais: ${number.toFixed(2)} <br />`
}


informacoes(number)