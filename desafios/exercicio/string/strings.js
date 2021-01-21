// let nome = prompt('Digite seu nome completo: ')

// let spaces = nome.split(' ').length - 1
// console.log(spaces)



let nome = ''

function capturando() {
    nome = document.body.getElementsByClassName('teste').value
    document.body.innerHTML += `Seu nome é: <${nome} <br />`
    document.body.innerHTML += `Seu nome tem ${nome.length - spaces} letras <br />`
    document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]} <br />`
    document.body.innerHTML += `A primeira letra "a" do seu nome representa o índice ${nome.indexOf('a')} <br />`
    document.body.innerHTML += `O índice que representa a última letra "a" do seu nome é ${nome.lastIndexOf('a')} <br />`
    document.body.innerHTML += `As três últimas palavras do seu nome é ${nome.slice(-3)} <br />`
    document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ,')} <br />`
    document.body.innerHTML += `As palavras do seu nome são: ${nome.toUpper()} <br />`
    document.body.innerHTML += `As palavras do seu nome são: ${nome.toLowerCase()} <br />`

}