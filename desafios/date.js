const data = new Date() // new Date(0) -> inicio do inicio
// new Date(2019, 3, 20, 15, 14, 27) // 3 == abril (4)

console.log(data)

const dia = data.getUTCDate()
const mes = data.getUTCMonth()
const ano = data.getFullYear()
data.time
console.log(`A data de hoje é ${dia}/${mes}/${ano}`)