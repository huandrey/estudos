const produto = {
    name: 'caneca',
    price: 19
}


const newProduct = { ...produto, outraChave: 'qualquer' }

const newProduct2 = Object.assign({}, produto, { outraChave: 'qualquer' })

console.log(newProduct)
console.log(newProduct2)
