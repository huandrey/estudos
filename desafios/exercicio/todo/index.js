const content = document.querySelector('.content')
const input = content.querySelector('.todo')
const buttonAdd = content.querySelector('.add')

const ul = content.querySelector('.todos')

const handleTodo = () => {
    todo = input.value
    return todo
}

let number = 1
const createTodo = (todo) => {
    const li = document.createElement('li')
    li.innerText = `${todo}`
    ul.appendChild(li)
    deleteTodo(li)
    number++
}

buttonAdd.addEventListener('click', event => {
    if (!input.value == '') {
        todo = handleTodo()
        createTodo(todo)
        input.value = ''
        saveTodos()
    } else {
        input.style.borderColor = 'rgb(207, 62, 62)'
    }
})

input.addEventListener('keypress', event => {
    if (event.key == 'Enter' && input.value != '') {
        todo = handleTodo()
        createTodo(todo)
        input.value = ''
        // input.focus()
        saveTodos()
    }
})

const deleteTodo = (li) => {
    let buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Delete'
    // buttonDelete.classList.add('delete')
    buttonDelete.setAttribute('class', 'delete')
    li.innerText += ' '
    li.appendChild(buttonDelete)
    return buttonDelete
}


document.addEventListener('click', event => {
    let element = event.target

    if (element.classList.contains('delete')) {
        element.parentElement.remove()
        number = 1
    }

    saveTodos()

})

const saveTodos = () => {
    const todos = ul.querySelectorAll('li')
    let lst = []

    for (let todo of todos) {
        let todoText = todo.innerText
        todoText = todoText.replace('Delete', '').trim()

        lst.push(todoText)
    }

    const todoJSON = JSON.stringify(lst)

    localStorage.setItem('todos', todoJSON)


}

const reloadTodo = () => {
    const todoJSON = localStorage.getItem('todos')

    const todos = JSON.parse(todoJSON)


    for (let todo of todos) {
        createTodo(todo)
    }

}

const inputColor = () => {
    document.addEventListener('click', event => {
        element = event.target

        console.log(element)
        if (element.classList.contains('todo')) {
            element.style.borderColor = ''
        }
    })
}

inputColor()

reloadTodo()