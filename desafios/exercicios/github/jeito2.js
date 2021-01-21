const input = document.getElementById('user')
const button = document.querySelector('button')

const req = () => {
    fetch(`https://api.github.com/users/${input.value}`)
        .then(result => result.text())
        .then(res => createComponent(JSON.parse(res)))
        .catch(e => console.error(e))
}

const createComponent = (element) => {
    const div = document.querySelector('.content')

    const { name, location, followers, following } = { ...element }

    div.innerHTML += name
}

button.addEventListener('click', () => {
    req()
})