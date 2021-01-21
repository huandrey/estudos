const numeros = [1, 2, 4]

const total = numeros.reduce((count, value) => count + value)

console.log(total)

const people = [
    {
        name: 'Luiz',
        age: 62
    },
    {
        name: 'Maria',
        age: 23
    },
    {
        name: 'Eduardo',
        age: 55
    },
    {
        name: 'Letícia',
        age: 10
    },
    {
        name: 'Rosana',
        age: 64
    },
    {
        name: 'Wallace',
        age: 63
    },

]

// Retorne a pessoa mais velha

const personOld = people.reduce((before, after) => {
    if (before.age > after.age) return before
    return after
})

console.log(personOld)


// revisao (filter, map, reduce)

// Retorne a soma do dobro de todos os pares

const numbers = [5, 50, 80]

// const numbersSX2 = numbers.reduce((count, value) => count + (value * 2))
// console.log(numbersSX2)

// const numberP = numbers.filter(value => value % 2 === 0)
// console.log(numberP)

// const numberX2 = numbers.map(value => value * 2)
// console.log(numberX2)

// const reduceNumbers = numberX2.reduce((count, value) => count + value)
// console.log(reduceNumbers)

const newNumbers = numbers
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((count, value) => count + value)

console.log(newNumbers)
