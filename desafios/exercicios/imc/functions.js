const result = () => {
    const form = document.querySelector('.form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const weight = form.querySelector('.weight').value
        const height = form.querySelector('.height').value

        console.log(typeof weight)
        const imc = calculaIMC(weight, height)
        const frase = retornaSituacao(imc)

        const result = document.querySelector('.result')

        result.innerHTML = frase
    })
}

const calculaIMC = (weight, height) => {
    return weight / (height ** 2)
}

const retornaSituacao = (imc) => {
    if (imc < 18.5) {
        return `Seu IMC é ${imc} e você está <strong>abaixo do peso</strong>.`
    } else if (imc < 24.9) {
        return `Seu IMC é ${imc} e você está com o <strong>peso normal</strong>.`
    } else if (imc < 29.9) {
        return `Seu IMC é ${imc} e você está em <strong>sobrepeso</strong>.`
    } else if (imc < 34.9) {
        return `Seu IMC é ${imc} e você está em <strong>obesidade grau 1.</strong>`
    } else if (imc < 39.9) {
        return `Seu IMC é ${imc} e você está <strong>obesidade grau 2.</strong>`
    } else if (imc >= 40) {
        return `Seu IMC é ${imc} e você está <strong>obesidade grau 3</strong>`
    }
}

result()
