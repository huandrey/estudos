export default class Generator {
    // constructor() {

    // }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    generator(size, caps, lower, number, simbol) {
        const lst = [];
        size = Number(size)
        for (let i = 0; i < size; i++) {
            caps && lst.push(this.addCaps())
            lower && lst.push(this.addLower())
            number && lst.push(this.addNumber())
            simbol && lst.push(this.addSimbol())
        }

        const pswd = lst.join('').slice(0, size)

        return pswd
    }
    addNumber() {
        return String.fromCharCode(this.rand(48, 58))
    }

    addCaps() {
        return String.fromCharCode(this.rand(65, 91))
    }

    addLower() {
        return String.fromCharCode(this.rand(97, 123))
    }

    addSimbol() {
        const simbols = ',.;[]{}!@#$%^&*()?:-_=+'
        return String.fromCharCode(this.rand(0, simbols.length))
    }


}