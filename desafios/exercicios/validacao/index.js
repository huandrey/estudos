class Validation {
    constructor() {
        this.form = document.querySelector('.form')
        this.init()
    }

    init() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event)
            console.log('sub')
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.checkFields()
    }

    checkFields() {
        const fields = this.form.querySelectorAll('.inp')
        const errors = this.form.querySelectorAll('.alert')

        errors.forEach((err, i) => {
            err.remove()
            fields[i].style.border = '1px solid #111'
        })

        for (let field of fields) {
            let label = field.previousElementSibling.innerHTML;

            if (!field.value) {
                this.createAlert(field, `${label} nao pode ser vazio!`)
            }

            if (field.classList.contains('inp-name') || field.classList.contains('inp-lastname')) {
                if (!this.nameValidation(field)) {
                    this.createAlert(field, `O ${label.toLowerCase()} precisa ter entre 3 e 12 caracteres`)
                }
            }

            if (field.classList.contains('inp-cpf')) {

                if (!this.validation(field)) {
                    this.createAlert(field, `CPF INVALIDO!`)
                }
            }

            if (field.classList.contains('inp-user')) {

                if (!field.value.match(/[a-zA-Z0-9]+$/g)) {
                    this.createAlert(field, `${label} precisa conter apenas letras e/ou numeros`)
                }
            }
        }
    }

    createAlert(field, message) {
        const div = document.createElement('div')
        div.setAttribute('class', 'alert')
        div.innerHTML = message

        field.style.border = '1px solid red'

        field.insertAdjacentElement('afterend', div)
    }

    validation(field) {
        const v = new ValidaCPF()
        const verif = v.Result(field.value)

        if (!verif) return false

        return true
    }

    nameValidation(field) {
        let text = field.value.split('')
        if (text.length < 3 || text.length > 12) return false

        return true
    }
}
const v = new Validation()
