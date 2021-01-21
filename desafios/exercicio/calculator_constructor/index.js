function Calculator() {
    const input = document.querySelector('.input')

    this.init = () => {
        this.allButtons()
        this.keyEnter()
    }

    this.allButtons = () => {
        // THIS SEMPRE SERÁ CALCULADORA QUANDO SE USA ARROW FUNCTION
        // FUNCTION (EVENT) (TEM Q USAR O BIND(THIS))
        document.addEventListener('click', event => {
            element = event.target

            if (this.feature('btn-num')) {
                // this.input.value += element.innerText
                this.buttonToDisplay(element.innerText)
            }

            if (this.feature('btn-clear')) {
                this.clearDisplay()
            }

            if (this.feature('btn-del')) {
                this.clearOne()
            }

            if (this.feature('btn-eq')) {
                this.result(input.value)
            }

            input.focus()
        });
    }

    this.keyEnter = () => {
        input.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                this.result(input.value)
                console.log(input.value)
            }
        })
    }

    this.buttonToDisplay = value => {
        input.value += value
    }

    this.clearDisplay = () => {
        input.value = ''
    }

    this.clearOne = () => {
        input.value = input.value.slice(0, -1)
    }

    this.feature = cls => {
        if (element.classList.contains(`${cls}`)) {
            return true
        }
    }

    this.result = string => {

        try {
            const result = eval(string)
            input.value = result
            input.focus()
        } catch (e) {
            input.style.borderColor = 'rgb(207, 62, 62)'
            // alert('Conta Invalida!')
        }
        // } catch (e) {
        //     alert('Digite algo válido!')
        //     return
        // }
    }
}


const calculator = new Calculator()

calculator.init()