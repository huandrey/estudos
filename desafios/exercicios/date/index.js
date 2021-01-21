const setDate = () => {
    const date = new Date()

    const content = document.querySelector('.content')

    new_date = returnText(date)

    content.innerHTML = new_date
}

const returnText = date => {
    days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outrubro', 'Novembro', 'Dezembro']
    const textDay = days[date.getUTCDay()]
    const day = date.getUTCDate()
    const month = months[date.getUTCMonth()]
    const year = date.getFullYear()

    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${textDay}, ${day} de ${month} de ${year} <br /> ${hours}:${minutes}`
}

setDate()