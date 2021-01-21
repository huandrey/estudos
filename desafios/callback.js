function dizOi(message, time, callback) {
    time * 1000
    setTimeout(() => {
        console.log(message)
        if (callback) callback()
    }, time)
}

dizOi('oi', 5, function () {
    dizOi('oi2', 1)
})
