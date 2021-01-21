// const Pessoa = (name, age, adress) => {
//     this.name = name
//     this.age = age
//     this.adress = adress
// }

function Pessoa(name, age, adress) {
    this.name = name
    this.age = age
    this.adress = adress
}

p1 = new Pessoa('hu', 20, 'rua joao agripino dos santos')

console.log(p1)