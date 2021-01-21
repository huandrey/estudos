const info = () => {
    const content = document.querySelector('.content')

    const stylesBody = getComputedStyle(document.body)
    const colorBody = stylesBody.background
    // console.log(colorBody)
    const lst = content.querySelectorAll('p')

    for (let i in lst) {
        lst[i].style.background = colorBody
    }
}

info()