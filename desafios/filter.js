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
        age: 19
    },
    {
        name: 'Rosana',
        age: 32
    },
    {
        name: 'Wallace',
        age: 47
    },

]

// Retorne as pessoas que tem o nome com 5 letras ou mais

const nameLenght = people.filter(person => person.name.length >= 5)

// Retorne as pessoas com mais de 50 anos

const person50 = people.filter(person => person.age > 50)

// Retorne as pessoas cujo nome termina com a

// const personA = people.filter(person => {
//     console.log(person.name)
//     if (person.name[-1] == 'a') {
//         return true
//     }
// })

// const personA = people.filter(person => person.name[person.name.length - 1] === 'a')
const personA = people.filter(person => person.name.toLowerCase().endsWith('a'))


console.log()
console.log(nameLenght)
console.log()
console.log(person50)
console.log(personA)
