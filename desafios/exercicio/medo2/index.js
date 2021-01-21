const maquinaEscrever = string => {

    const content = document.querySelector('.content')

    let i = 0
    setInterval(() => {
        content.innerHTML += string[i]
        i++
        // if (i == string.length) {
        //     clearTimeout()
        // }
    }, 500)

    setTimeout(() => {
        clearInterval(timer)
    }, string.length * 500)

}

// maquinaEscrever('lorem ipsum de itaquera')