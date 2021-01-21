class ValidaCPF {
    // constructor(cpf) {
    //     this.cpf = cpf
    //     this.Result(this.cpf)
    // }

    cutCPF(cpf) {
        const digits = cpf.slice(0, -3).replace('.', '').replace('.', '')
        return digits
    }
    FirtDigit(cpf) {
        const digits = (this.cutCPF(cpf)).split('')

        let k = 10
        const total = digits.reduce((ac, el) => ac + el * k--, 0)

        return this.Calc(total).toString()
    }


    LastDigit(cpf) {
        const first = this.FirtDigit(cpf).toString()
        const digits = (this.cutCPF(cpf) + first).split('')

        let k = 11
        const total = digits.reduce((ac, el) => ac + el * k--, 0)

        return this.Calc(total).toString()
    }

    Calc(total) {
        const digit = 11 - (total % 11)

        if (digit <= 9) return digit

        return 0
    }

    Result(cpf) {
        const twoDigits = cpf.slice(-2)

        if (this.FirtDigit(cpf) + this.LastDigit(cpf) === twoDigits) return true
        return false
    }
}
const validador = new ValidaCPF()

console.log(validador.Result())