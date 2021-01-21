// XMLH
// const request = (object) => {
//     return new Promise((resolve, reject) => {
//         const xml = new XMLHttpRequest()
//         xml.open(object.method, object.url, true)
//         xml.send() // como o metodo eh get, nao eh necessario nenhum parametro

//         xml.addEventListener('load', () => {
//             if (xml.status >= 200 && xml.status < 300) {
//                 resolve(xml.responseText)
//             } else {
//                 reject({ err: xml.status })
//             }
//         })
//     })
// }


// async function loadPage(element) {
//     const div = document.querySelector('.project')
//     const href = element.getAttribute('href')

//     try {
//         const result = await request({
//             method: 'GET',
//             url: href,
//         })

//         div.innerHTML = result
//     } catch (e) {
//         console.log(new Error(e))

//     }
// }
// document.addEventListener('click', (e) => {

//     const element = e.target
//     const tag = element.tagName.toLowerCase(); // nome da tag html 

//     if (tag === 'a') {
//         e.preventDefault()
//         loadPage(element)
//     }

// })



// FETCH


async function loadPage(element) {
    const div = document.querySelector('.project')
    const href = element.getAttribute('href')

    try {
        const path = await fetch(href)
        console.log(path.status)
        if (path.status !== 200) throw new Error('Meu erro!')
        const res = await path.text()

        div.innerHTML = res
    }
    catch (e) {
        console.warn(e)
    }

    fetch(href)
        .then(path => path.text())
        .then(res => div.innerHTML = res)
        .catch(e => new Error(e))
}

document.addEventListener('click', (e) => {

    const element = e.target
    const tag = element.tagName.toLowerCase(); // nome da tag html 

    if (tag === 'a') {
        e.preventDefault()
        loadPage(element)
    }

})