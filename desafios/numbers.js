let number = 5

console.log(number.toString())
console.log(number.toString(2))
console.log(typeof number)

number = number.toString()
number = parseInt(number)
// number = parseFloat(number)

console.log(typeof number)
console.log(Number.isInteger(number))

console.log()

let tempory = number * 'Olá'

console.log(tempory)

console.log(Number.isNaN(tempory))

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 4))