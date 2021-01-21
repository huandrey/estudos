
const data = new Date()

let dia = data.getUTCDay()
console.log(dia)
const retornaDia = dia => {
    let days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    for (i = 0; i <= days.length; i++) {
        if (dia == i) {
            return `O dia de hoje é ${days[i]}`
        }
    }
}




console.log(retornaDia(dia))

let number = 2

switch (number) {
    case 1:
        console.log('é 1')
    case 2:
        console.log('é 2')
    case 3:
        console.log('é 3')
}