function CheckCPF() {

    this.init = () => {
        this.clickButton()
    }

    this.cutCPF = (cpf) => {
        const Format = cpf.replaceAll('.', '').replace('-', '').slice(0, -2)
        return Format
    }

    this.clickButton = () => {

        const btn = document.querySelector('.btn')

        btn.addEventListener('click', event => {

            event.preventDefault()

            const cpf = document.querySelector('.cpf').value

            if (this.check(cpf)) {
                const div = document.querySelector('.result')
                const h1 = document.createElement('h1')
                h1.innerText = 'CPF VALIDADO!'
                div.appendChild(h1)
            } else {
                alert('CPF INVALIDO')
            }
        })
    }

    this.calcFirsDigit = (cpf) => {
        k = 10

        cpf = cpf.split('')

        const total = cpf.reduce((calc, element) => calc + Number(element) * k--, 0)

        const digit = this.form(total)

        return digit.toString()
    }

    this.calcLastDigit = (cpf) => {
        k = 11

        cpf = cpf.split('')

        const total = cpf.reduce((calc, element) => calc + Number(element) * k--, 0)

        const digit = this.form(total)

        return digit.toString()
    }

    this.form = (total) => {
        const calc = 11 - (total % 11)

        if (calc <= 9) {
            return calc
        }

        return 0
    }

    this.check = (cpf) => {

        const twoDigit = cpf.slice(-2)

        const digits = this.cutCPF(cpf)

        const firstDigit = this.calcFirsDigit(digits)

        const lastDigit = this.calcLastDigit(digits + firstDigit)

        if (firstDigit + lastDigit === twoDigit) {
            return true
        }
    }
}


const p1 = new CheckCPF()
p1.init()
