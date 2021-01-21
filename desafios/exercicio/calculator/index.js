const createCalculator = () => {
    return {
        input: document.querySelector('.input'),

        init() {
            this.allButtons()
            this.keyEnter()
        },
        allButtons() {
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
                    this.result(this.input.value)
                }

                this.input.focus()
            });
        },
        keyEnter() {
            this.input.addEventListener('keypress', event => {
                if (event.keyCode == 13) {
                    this.result(this.input.value)
                }
            })
        },
        buttonToDisplay(value) {
            this.input.value += value
        },
        clearDisplay() {
            this.input.value = ''
        },
        clearOne() {
            this.input.value = this.input.value.slice(0, -1)
        },
        feature(cls) {
            if (element.classList.contains(`${cls}`)) {
                return true
            }
        },
        result(string) {

            try {
                const result = eval(string)
                this.input.value = result
            } catch (e) {
                this.input.style.borderColor = 'rgb(207, 62, 62)'
                // alert('Conta Invalida!')
            }
            // } catch (e) {
            //     alert('Digite algo válido!')
            //     return
            // }
        }
    }
}

const calculator = createCalculator()

calculator.init()