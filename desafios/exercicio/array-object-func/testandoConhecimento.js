const info = () => {
    document.addEventListener('keypress', (event) => {
        event.preventDefault()
        key = event.key
        // prompt(`Você apertou a telca ${key}, correto?`)

        container = document.querySelector('.container')

        container.innerHTML += key
    })
}

info()