exports.middlewareGlobal = (req, res, next) => {
    console.log('Sou um middleware global!')
    next()
}

exports.checkCSRF = (error, req, res, next) => {
    if (error && error.code === 'EBADCSRFTOKEN') {
        console.log('aqui estou')
        res.render('404');
    }
    // next()
}

exports.CSRFMiddleware = (req, res, next) => {
    console.log('oi')
    res.locals.csrfToken = req.csrfToken();

    next();
}