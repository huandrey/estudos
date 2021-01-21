let lst = [
    {
        tag: 'p',
        text: 'frase 1'
    },
    {
        tag: 'div',
        text: 'frase 2'
    },
    {
        tag: 'footer',
        text: 'frase 3'
    },
    {
        tag: 'section',
        text: 'frase 4'
    }
]

// const setWord = () => {
//     const container = document.querySelector('.container')
//     for (let i = 0; i < lst.length; i++) {
//         container.querySelector(`${lst[i].tag}`).innerHTML = `${lst[i].text}`
//     }
// }


const setWord = () => {
    const container = document.querySelector('.container')

    for (let i = 0; i < lst.length; i++) {
        let { tag, text } = lst[i]
        let element = document.createElement(`${tag}`)
        element.innerHTML = `${text}`

        container.appendChild(element)
    }
}
setWord()