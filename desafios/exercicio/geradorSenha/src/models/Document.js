import Generator from './Generator';



const inputSize = document.querySelector('.caract')
const inputCaps = document.querySelector('.caps')
const inputNumber = document.querySelector('.number')
const inputLower = document.querySelector('.lower')
const inputSimbol = document.querySelector('.simbol')

export default () => {

    const button = document.querySelector('button')

    const gera = new Generator()

    button.addEventListener('click', () => {
        const wrapper = document.querySelector('.wrapper')
        const wrapperChild = document.querySelectorAll('div')
        console.log(wrapperChild)
        if (wrapperChild.length > 7) {
            console.log('caralhjo')
            wrapperChild[7].remove()
        }

        const p = gera.generator(
            inputSize.value,
            inputCaps.checked,
            inputLower.checked,
            inputNumber.checked,
            inputSimbol.checked)

        const result = document.createElement('div')

        result.setAttribute('class', 'result')

        wrapper.appendChild(result)
        result.innerText = p

    })

}
