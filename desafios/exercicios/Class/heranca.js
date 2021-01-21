class Eletronic {
    constructor(name) {
        this.name = name
        this.active = false
    }

    activeMethod() {
        if (this.active) return

        this.active = true
    }

    deactiveMethod() {
        if (!this.active) return

        this.active = false
    }
}

class Smartphone extends Eletronic {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    Iteretion(valor) {
        const colors = ['black', 'white', 'red']

        return colors.filter(color => color === valor)
    }

    set color(valor) {
        if (this.Iteretion(valor)) {
            this.color = valor
        } else {
            console.log('noo')
        }
    }

    get ccolor() {
        return this.color
    }
}

const s1 = new Smartphone('iPhone', 'preto')
console.log(s1)
s1.color('rosa')
