lst = []

const info = () => {
    const form = document.querySelector('.form')
    const container = document.querySelector('.container')
    // espião 1. maneira antiga
    /*
    form.onsubmit = event => {
        // o problema daqui é que toda vez ele recarrega a página 
        // e nós perdemos os nossos dados
        event.preventDefault() // com isso o que aconteceria por padrão é barrado, ou seja, a pagina não recarregará
        alert('você enviou ')
    };
    */

    // 2. maneira atualizada
    // tudo q tinha on, tira o on e bota só o tipo de evento
    form.addEventListener('submit', event => {
        event.preventDefault()
        name = form.querySelector('.name').value
        age = form.querySelector('.age').value

        lst.push(createObject(name, age))

        container.innerHTML += `Nome: ${lst[lst.length - 1].name} <br /> Idade: ${lst[lst.length - 1].age} <br />`
        container.innerHTML += '<br />'
    })
}

const createObject = (name, age) => {
    return {
        name,
        age
    }
}

info()
