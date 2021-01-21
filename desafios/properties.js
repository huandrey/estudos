function Product(name, price, stok) {
    this.name = name
    this.price = price
    this.stok = stok


    Object.defineProperty(this, 'stok', {
        enumerable: true, // pode mostrar a chave?
        value: stok, // fazendo referencia ao parametro
        writable: true, // posso alterar o valor?  \\
        configurable: true // posso deletar a chave?
    })
}

p1 = new Product('iPhone', '1999', 3)
console.log(Object.keys(p1))


// getters e setters

// get obtem e set muda 



function Person(name, age, disponible, adress) {
    this.name = name
    this.age = age
    this.adress = adress


    Object.defineProperty(this, 'disponible', {
        enumerable: true, // pode mostrar a chave?
        value: disponible, // fazendo referencia ao parametro
        writable: true, // posso alterar o valor?  \\
        configurable: true // posso deletar a chave?
    })

    Object.defineProperties(this, {
        adress: {
            enumerable: true,
            value: adress,
        },
        work: {
            enumerable: true,
            value: false
        }
    })
}

p1 = new Product('iPhone', '1999', 3)
console.log(Object.keys(p1))


const pers1 = new Person('huandrey', 20, true, 'rua joao agripino dos santos, 316')

console.log(pers1)