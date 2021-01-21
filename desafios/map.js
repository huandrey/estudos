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

// Retorne apenas uma string com o nome da pessoa

const onlyName = people.map(person => person.name)

console.log(onlyName)

// Remova apenas a chave nome do objeto

const removeName = people.map(person => {
    return {
        age: person.age
    }
})

const removeName2 = people.map(person => ({ age: person.age }))

console.log(removeName2)
// const removeName = people.map(person => {
//     return { age } = person
// })

console.log(removeName)


// Adicione uma chave id em cada objeto

// people.map(person => person.id = 0)

// id = 1
// people.map(person => {
//     person.id = id
//     id++
// })


// const comId = people.map((person, index) => person.id = index + 1)

// const comId = people.map((person, index) => {
//     person.id = index + 1
//     return person
// })

// comIdDeFato = people.map((person, index) => {
//     const newObject = { ...people, id: index }
//     return newObject
// })

comIdDeFato = people.map((person, index) => {
    const newObject = { ...person }
    newObject.id = index + 1
    return newObject
})

console.log(people)
console.log(comIdDeFato)