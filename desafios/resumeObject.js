// criar objeto de maneira literal 
const ob = {}

// criar objeto por meio de uma funcao fabrica

const obj = (name, age) => {
    return {
        name,
        age
    }
}

const o1 = obj('hau', 129)
console.log(o1)


// criar objeto por meio de uma funcao construtora
// OBS -> Nao funciona com arrow function

function Product(name, age) {
    this.name = name
    this.age = age
}

p1 = new Product('iPhone 12', 3999)

console.log(p1)


// Object.keys() -> Mostra as chaves disponiveis no objeto
// Object.values() -> Mostra os valores do objeto
// Object.entries() -> Cria um array com [ chave, valor ]
// Object.getOwnPropertyDescritor(object, chave) -> Retorna as configuracoes da chave passada no paramentro (value, conf, write,...)
// Object.assign({}, objetoBase) -> cria uma deep copia do objeto 
// Object.freeze() -> congela objeto


function Testando(name, age) {
    this.name = name
    //this.age = age
    this.changeAge = age => age + 1

    Object.defineProperty(this, 'age', {
        enumerable: true,
        value: this.changeAge(age)

    })
}


const t = new Testando('huandrey', 20)

console.log(t)