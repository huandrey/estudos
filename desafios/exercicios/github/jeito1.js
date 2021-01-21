const input = document.getElementById('user')
const button = document.querySelector('button')

const req = () => {
    return new Promise((resolve, reject) => {
        const xml = new XMLHttpRequest();
        xml.open('GET', `https://api.github.com/users/${input.value}`, true);
        xml.send();
        console.log(xml.status)

        xml.addEventListener('load', () => {
            if (xml.status >= 200 && xml.status < 300) {
                console.log('cheguei')
                resolve(xml.responseText)
            } else {
                reject('erro')
            };
        })

    });
};

button.addEventListener('click', (e) => {
    e.preventDefault()
    createComponent()
})

function createComponent() {
    const div = document.querySelector('div')
    req().then(res => {
        const objectt = JSON.parse(res)
        // div.innerHTML += objectt.name
        console.log(typeof objectt)
        console.log(objectt)
        for (let key of Object.keys(objectt)) {
            div.innerHTML += `${objectt[key]} <br />`
        }
    })
}

