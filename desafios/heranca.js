// Eu vendo camiseta, caneca, lapis....
// O que tudo isso tem em comum? Todos sao produtos


// Produto tem q ter a possibilidade de aumento e preco
// Camiseta = cor
// Caneca = material (plastico..)


function Product(name, price) {
    this.name = name
    this.price = price
}


Product.prototype.promo = function (money) {
    this.price -= money
}

Product.prototype.big = function (money) {
    this.price += money
}


function Camiseta(name, price, color) {
    Product.call(this, name, price)
    this.color = color
} 