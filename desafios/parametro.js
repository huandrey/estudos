function algumaCoisa() {
    // hoisting
    // ou seja, posso chamar a função antes de declará-la, pois o motor do js joga as func p cima
}

const algumaCoisa2 = () => {
    // outro jeito
}

const nome = function () {
    // outro jeito
}

// desestruturação na própria função

const algo = ({ name, age }) => {
    return `${name}, ${age}`
}

obj = {
    name: 'huandrey',
    age: 20,
    adress: {
        street: 'Rua João Agripino dos Santos',
        number: 316,
        city: 'Campina Grande',
        country: 'Brazil'
    }
}

console.log(algo(obj))

// arguments (função sem parametros)
// NÃO FUNCIONA COM ARROW FUNCTIONS
// aprendi do pior jeito
// MASSSSSS da pra usar o rest operator p ter esses arguments

const funcao3 = (...args) => {
    console.log(args)
}

funcao3('dale', 'que')

function funcao2() {
    console.log(arguments)

    // for (let param of arguments) {
    //     console.log(param)
    // }
}

funcao2(5454, 85, 'carol')

const funcao = (number1, number2, ...resto) => {
    console.log(number1, number2, resto)
    // 1 2 [ 4, 5, 6 ] 
    // resto sempre precisa ser o ultimo parametro
}

funcao(1, 2, 4, 5, 6)