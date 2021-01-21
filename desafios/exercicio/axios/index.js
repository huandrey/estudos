// buscando os dados do arquivo json


// let data = fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => q(json))

const data = axios('pessoas.json')
    .then(res => q(res.data))


const q = (people) => {
    // for (let person of people) {
    //     console.log(person)
    // }

    const jj = people.filter(person => {
        return person.salario >= 40000
    })

    console.log(jj)
}


async function searchName(name) {
    const search = await axios(`https://api.github.com/users/${name}`)
        .then(res => res.data)

    console.log(search.name)
}

// for (let i = 0; i < 3; i++) {

//     const n = prompt('Digite um nome!')
//     searchName(n)
// }

const nome = 'll'
const o = { nome: 'hu' }
const n = { ...nome }
console.log(n)