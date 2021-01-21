import ValidaCPF from './ValidaCPF';

// const v = new ValidaCPF()
export default class GeraCPF {
    constructor() {
        this.validation = new ValidaCPF()
    }

    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + max))
    }

    generator() {
        const CPFClear = this.rand()
        console.log(CPFClear)
        const firstDigit = this.validation.FirstDigit(CPFClear)
        const lastDigit = this.validation.LastDigit(CPFClear + firstDigit)

        const newCPF = CPFClear + firstDigit + lastDigit

        return newCPF
    }
}