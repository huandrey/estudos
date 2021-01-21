// Os metodos ja ficam dentro do __proto__

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    data() {
        return `${this.name} ${this.age}`
    }

    get dataGet() {
        return `${this.name} ${this.age}`
    }

}

const p1 = new Person('huandrey', 20)
console.log(p1)

console.log(p1.data())
console.log(p1.dataGet)