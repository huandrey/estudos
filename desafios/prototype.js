function Product(name, price) {
    this.name = name
    this.price = price
}


Product.prototype.promo = function (percentual) {
    this.price = parseFloat((this.price - (this.price * percentual / 100)).toFixed(2))
}

Product.prototype.big = function (percentual) {
    this.price = parseFloat((this.price + (this.price * percentual / 100)).toFixed(2))
}


p = new Product('iPhone 12', 6999)

p.big(50)
console.log(p)

const outro = {
    name: 'caneta',
    price: 2.99
}

Object.setPrototypeOf(outro, Product.prototype)

outro.promo(10)

console.log(outro)



const p3 = Object.create(Product.prototype)
console.log(p3)

const p4 = Object.create(Product.prototype, {
    name: {
        enumerable: true,
        value: 'PlayStation 5',
    },
    price: {
        enumerable: true,
        value: 4000
    }
})

console.log(p4)