const content = document.querySelector('.content')
const hours = content.querySelector('.hours')

const buttonInit = content.querySelector('.init')
const buttonPause = content.querySelector('.pause')
const buttonZero = content.querySelector('.zero')

let date = new Date(0)
date.setHours(60 * 60 * 1000 * 3)
hours.innerText = date.toLocaleTimeString('pt-BR')

let second = 1
let carai = 1
let hour = 1
let stop = false
let pause = false

const setTimer = () => {
    buttonInit.addEventListener('click', event => {
        // if (date.setSeconds == 0 & date.setMinutes == 0) {
        //     date = new Date()
        // }

        // console.log(hour, carai, second)
        hours.style.color = '#111'

        tt = setInterval(() => {
            if (second == 60 && carai == 60) {
                date.setSeconds(0)
                date.setMinutes(0)
                date.setHours(hour)
                second = 0
                carai = 0
                hour++
            } else if (second == 60) {
                date.setSeconds(0)
                date.setMinutes(carai)
                console.log(carai)
                second = 0
                carai++
            }
            date.setSeconds(second++)
            hours.innerText = date.toLocaleTimeString('pt-BR')
            // console.log(date.toLocaleTimeString('pt-BR'))
        }, 1000)

        stop = true
    })

    buttonPause.addEventListener('click', event => {
        pause = true
        clearInterval(tt)
        hours.style.color = 'red'
    })


    buttonZero.addEventListener('click', event => {
        hours.style.color = '#111'
        date = new Date(0)
        date.setHours(60 * 60 * 1000 * 3)

        second = 1
        carai = 1
        hour = 1

        hours.innerText = date.toLocaleTimeString('pt-BR')
        clearInterval(tt)
    })
}

setTimer()