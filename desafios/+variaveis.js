let name = 'Huandrey'

// let name = 'Fulano' Erro

if (true) {
    let name = 'Ciclano'
    console.log(name)
}

// let tem escopo de bloco

var age = 20

if (true) {
    var age = 21
    console.log(age)
}

// resumo

let j = 'criando'

if (true) {
    let j = 'recriando'
}

console.log(j) // 'criando'

var k = 'criando'

if (true) {
    var k = 'recriando'
}

console.log(k) // 'recriando'

// so muda se for escopo de função

// ex

const teste = () => {
    var k = 'criando'
}

console.log(k) // 'recriando'