const objeto = {
    name: 'huandrey',
    age: 19,
    sex: true
}

let lst = [1]

let { age } = objeto

let tudo = lst + objeto

console.log(age)
console.log(tudo[4])

// criando objetos por meio de uma função

const createObject = (name, age, sex) => {
    return {
        name,
        age,
        sex,
        fala() {
            return `${this.name} está falando!` // this representa o proprio objeto. (self.name...lembra?)
        },
        completaAno() {
            // ++this.age ou
            this.age++
            return this.age
        }
    }
}

let p1 = createObject('augusto', 21, true)
console.log(p1.name)

// p1.fala = () => `${p1.name} está falando!`
console.log(p1.fala())
console.log(p1.completaAno())



const mudaLetra = (string, posicao, letra) => {
    new_string = ''
    for (let i = 0; i < string.length; i++) {
        if (i == posicao) {
            new_string += letra
            continue
        }
        new_string += string[i]
    }

    return new_string
}

console.log(mudaLetra('huandrey', 0, 'r'))

let varA = 5
let varB = varA
varA = 10

console.log(varA, varB)