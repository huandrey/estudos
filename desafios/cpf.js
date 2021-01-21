function CheckCPF() {
    // const input = document.querySelector('.cpf')
    const cpf = this.cutCPF()
    const i = 10
    this.init = () => {

    }

    this.calcFirsDigit = () => {
        const dsa = cpf.reduce((total, digit) => {
            return total += digit * i
            i--
        })
    }

    this.cutCPF = (cpf) => {
        const Format = cpf.slice(0, -2).replaceAll('.', '').replace('-', '').slice(0, -2)
        return Format
    }
}


p1 = CheckCPF()
console.log(p1.cutCPF('096.161.854-03'))
