const increment = () => {
    button = document.querySelector('.button')

    console.log(button)
    number = 1
    button.addEventListener('click', event => {
        span = document.querySelector('.span')

        span.innerHTML = number
        number++

    })
}

increment()