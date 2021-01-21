// Para reforcar a ideia de requisicao

const button = document.querySelector('button')

const createElement = (object) => {
    const div = document.querySelector('.content')

    const img = document.createElement('img')
    const { name, avatar_url } = { ...object }
    img.setAttribute('src', avatar_url)

    div.appendChild(img)
    div.innerHTML += name

}

const request = () => {
    const input = document.getElementById('user')
    console.log(input.value)
    // fetch(`https://api.github.com/users/${input.value}`)
    //     .then(response => response.text())
    //     .then(json => {
    //         const object = JSON.parse(json)
    //         createElement(object)
    //     })

    axios(`https://api.github.com/users/${input.value}`)
        .then(res => {
            createElement(res.data)
        })
}

document.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.getElementById('user')
    if (e.target === button) {
        console.log('oi')
        console.log(e.target)

        request()
        input.value = ''
        button.focus()
    } else {
        console.log('errr')
        console.log(e.target)
    }

})