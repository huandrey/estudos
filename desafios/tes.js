function time(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}

async function exe() {
    const k = await time('aqui estoy', 6000)
    console.log(k)
    console.log('lkk')
}

exe()