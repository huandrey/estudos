// Antes usavamos promisses

function dizOi(message, time, callback) {
    time * 1000
    setTimeout(() => {
        console.log(message)
        if (callback) callback()
    }, time)
}

// dizOi('oi', 5, function () {
//     dizOi('oi2', 1)
// })

// Com o uso de promisses podemos reduzir a arvore de natal


function dizAlgo(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}

dizAlgo('hello world!', 5)
    .then(retorno => {
        console.log(`Entao eh isso que o then faz.. traz a resposta que nesse caso eh ${retorno}`)
        return dizAlgo('hello world', 1)
    })
    .then(retorno => {
        console.log(retorno)
    })


// Promise all => [], Promise race => first value, Promise resolve, Promise reject